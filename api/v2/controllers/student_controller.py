#!/usr/bin/env python3
from flask import (
    current_app,
    Blueprint,
    render_template,
    jsonify,
    request,
    url_for,
    session,
    redirect,
    send_file,
    send_from_directory,
    make_response,
    flash,
)
from functools import wraps
from config import UPLOAD_FOLDER, allowed_file
import json
import traceback
import base64
import requests
from urllib.parse import quote, unquote
import jwt
import logging
from io import BytesIO
from werkzeug.utils import secure_filename
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import SQLAlchemyError
import os
import pymysql
from MySQLdb import OperationalError
from dotenv import load_dotenv
import time
import traceback
from api.v2.models import (
    Student,
    Department,
    Semester,
    Notification,
    Admin,
    AdmissionForm,
    FormImage,
    Newsletter,
    SuperAdmin,
    Applicant,
    Image,
    Course,
    PaymentStatus,
)
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.courses_controller import assign_courses
from app import cache, db
from api.v2.views.page_views_route import *
from flask_restx import Namespace, Resource, fields


user_bp = Blueprint("user", __name__, template_folder="templates")


# Define the Namespace for the student API
student_ns = Namespace('students', description='Student related operations')

# /****************************************** STUDENTS ROUTES ************************************************/

# Define the API model for input validation
login_model = student_ns.model('Login', {
    'admission_number': fields.String(required=True, description='Student admission number'),
    'password': fields.String(required=True, description='Student password')
})


@student_ns.route('/login')
class StudentLogin(Resource):
    @student_ns.expect(login_model)
    def post(self):
        """
        A route that handles student authentication
        """
        try:
            data = request.json
            admission_number = data['admission_number']
            password = data['password']

            user = Student.query.filter_by(admission_number=admission_number).first()
            if user and check_password_hash(user.password, password):
                # Create a JWT token
                token = jwt.encode(
                    {
                        "user_id": user.admission_number,
                        "exp": datetime.utcnow() + timedelta(hours=2),
                    },
                    "secret_key",
                    algorithm="HS256",
                )

                response = {
                    'token': token,
                    'user_id': user.admission_number
                }
                return jsonify(response)
            else:
                flash('Invalid admission number or password', 'danger')
                return{'message': 'Invalid admission number or password'}, 401

        except Exception as e:
            logging.error(f"An error occurred: {str(e)}")
            return {'message': f'An error occurred: {str(e)}'}, 500




# route to get student by name or admission
@user_bp.route("/student", methods=["GET"])
def get_student_info():
    """
    A function that retrieves a student information
    """

    identifier = request.args.get("identifier")

    student = None

    print("Identifier:", identifier)

    # Check if the identifier matches admission number criteria
    if identifier:
        student = Student.query.filter_by(admission_number=identifier).first()
    else:
        # Assuming name is longer than 20 characters
        student = Student.query.filter(
            Student.name.ilike("%{}%".format(identifier))
        ).first()

    if student:
        # Student model has attributes: admission_number, name, date_of_birth, etc.
        print("Retrieved Admission Number:", student.admission_number)

        student_info = {
            "admission_number": student.admission_number,
            "name": student.name,
            "date_of_birth": (
                student.date_of_birth.strftime("%Y-%m-%d")
                if student.date_of_birth
                else None
            ),
            "department_name": student.department_name,
            "state": student.state,
            "gender": student.gender,
            "email": student.email,
            "phone_number": student.phone_number,
        }

        # Accessing related objects
        if student.departments:
            student_info["department"] = {
                "department_level": student.departments[0].department_level,
                "department_name": student.departments[0].department_name,
            }

        if student.images:
            latest_image = (
                Image.query.filter_by(student_admission_number=student.admission_number)
                .order_by(Image.created_at.desc())
                .first()
            )
            if latest_image:
                student_info["images"] = [
                    {"image_path": latest_image.image_data, "mimetype": "image/jpeg"}
                ]
            else:
                student_info["images"] = []

        if student.courses:
            student_info["courses"] = [
                {
                    "course_code": course.course_code,
                    "course_title": course.course_title,
                    "credit": course.credit,
                    "ca_score": course.ca_score,
                    "exam_score": course.exam_score,
                    "total_score": course.total_score,
                    "grade": course.grade,
                    "remark": course.remark,
                }
                for course in student.courses
            ]

        if student.semesters:
            student_info["semesters"] = [
                {"semester": semester.semester} for semester in student.semesters
            ]

        encoded_student_info = quote(json.dumps(student_info))

        return redirect(url_for("pages.admindash", student_info=encoded_student_info))
    else:
        return jsonify({"message": "Student Not Found"}), 404


# /****************************************** END OF STUDENTS ************************************************/




# /****************************************** REGISTERS ROUTES ************************************************/


@user_bp.route("/student/register", methods=["POST"])
def registration():
    """
    A function that handles users registration
    """

    try:
        data = request.json
        existing_student = Student.query.filter_by(
            admission_number=data["admission_number"]
        ).first()
        existing_email = Student.query.filter_by(email=data["email"]).first()

        if existing_student:
            return jsonify({"error": "Admission Number Already Exists!"}), 400
        if existing_email:
            return jsonify({"error": "Email Already Exists!"}), 400

        # Create a new user instance
        new_user = Student(
            admission_number=data["admission_number"],
            password=generate_password_hash(data["password"]),
            department_name=data["department_name"],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow(),
        )

        db.session.add(new_user)
        db.session.commit()

        department_level = data.get("department_level")
        department_name = data.get("department_name")
        id = 0

        department = Department.query.filter_by(id=id).first()
        if department is None:
            # If department doesn't exist, create a new department
            new_department = Department(
                department_level=department_level, department_name=department_name
            )
            new_user.departments.append(new_department)
            db.session.add(new_department)
            db.session.commit()  # Commit changes after creating a new department

        if department:
            # Set student_id in department to associate it with the new user
            department.student_id = new_user.admission_number
            db.session.commit()

        # Check if the provided semester exists in the semesters table
        semester_name = data.get("semester")
        if semester_name:
            semester = Semester.query.filter_by(id=id).first()
            if semester is None:
                new_semester = Semester(semester=semester_name)
                new_user.semesters.append(new_semester)
                db.session.add(new_semester)
                db.session.commit()  # Commit changes after creating a new semester
            else:
                new_user.semesters.append(semester)

            if semester:
                # Set student_id in department to associate it with the new user
                semester.student_id = new_user.admission_number
                db.session.commit()
        else:
            return jsonify({"error": "Semester value is missing or invalid"}), 400

        for course in new_user.courses:
            course.student_id = new_user.admission_number

        assign_courses(new_user, department_name, department_level, semester_name)

        db.session.commit()

        # Return JSON successful message if data's works
        return jsonify({"message": "User Registration Successfully Created!"}), 201

    # Handles database issues (connection or constraint violation)
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# /****************************************** ENDS OF REGISTERS ROUTES ************************************************/


# /****************************************** UPDATES ROUTES ************************************************/


@user_bp.route("/update-profile", methods=["POST"])
def update_profile():
    if request.method == "POST":
        # Retrieve form data
        name = request.form.get("name")
        password = request.form.get("password")
        date_of_birth = request.form.get("date_of_birth")
        gender = request.form.get("gender")
        email = request.form.get("email")
        state = request.form.get("state")
        phone_number = request.form.get("phone_number")

        # Hash the password before saving
        hashed_password = generate_password_hash(password)

        # Fetch the current user from the session
        current_user = Student.query.get(session.get("user_id"))

        # Update user profile data
        current_user.name = name
        current_user.password = hashed_password
        current_user.date_of_birth = date_of_birth
        current_user.gender = gender
        current_user.email = email
        current_user.state = state
        current_user.phone_number = phone_number

        # Commit changes to the database
        db.session.commit()

        return redirect(url_for("pages.dashboard"))
    else:
        return jsonify({"error": "Invalid request method"}), 405





# Create a route for updating the password using both PUT and POST methods
@user_bp.route("/update-password", methods=["PUT", "POST"])
def update_password():
    if request.method == "POST" or request.form.get("_method") == "PUT":
        admission_number = request.form.get("admission_number")
        new_password = request.form.get("new_password")

        if not new_password:
            return jsonify({"message": "New password is required"}), 400

        # Get the current student based on admission_number
        student = Student.query.get(admission_number)

        if not student:
            return jsonify({"message": "Student not found"}), 404

        # Hash the new password before storing it
        hashed_password = generate_password_hash(new_password, method="sha256")
        student.password = hashed_password

        # Update the 'updated_at' timestamp
        student.updated_at = datetime.utcnow()

        # Commit changes to the database
        db.session.commit()

        return redirect(url_for("pages.admindash"))

    else:
        return jsonify({"message": "Method not allowed"}), 405


# /****************************************** END OF UPDATES ROUTES ************************************************/



@pages_bp.route("/student/dashboard")
def student_dashboard():
    if "user_id" in session:
        admission_number = session.get("user_id")
        token = session.get("token")

    if not admission_number or not token:
        return jsonify({"error": "Unauthorized"}), 401

    current_user = Student.query.get(admission_number)
    courses = current_user.courses
    departments = current_user.departments
    semesters = current_user.semesters
    images = current_user.images

    # Manually replace slashes with %2F
    encoded_admission_number = current_user.admission_number.replace("/", "%2F")

    user_image_path = f"/images?admission_number={encoded_admission_number}"

    print("Image file exists:", os.path.exists(user_image_path))
    print("User Image Path:", user_image_path)

    image1 = os.path.join(current_app.config["UPLOAD_FOLDER"], "sunnahlogo.avif")

    return render_template(
        "dashboard.html",
        student=current_user,
        departments=departments,
        semesters=semesters,
        courses=courses,
        user_image=image1,
        user_image_path=user_image_path,
        images=images,
        os=os,
    )
    
    
    
    
    
@pages_bp.route("/student/images", methods=["GET"])
def get_image():
    admission_number = request.args.get("admission_number")

    if admission_number:
        # Retrieve the latest image associated with the student
        image = (
            Image.query.filter_by(student_admission_number=admission_number)
            .order_by(Image.created_at.desc())
            .first()
        )

        if image and image.image_data:

            # Open the image file and read its content
            with open(image.image_data, "rb") as f:
                image_data = f.read()

            # Create a Flask response with the image data and set the appropriate content type
            response = make_response(image_data)
            response.headers["Content-Type"] = "image/jpeg"

            print("Response:", response)
            print("Headers:", response.headers)

            return response

    # Handle case where admission_number is not provided or image not found
    return jsonify({"error": "Image not found"}), 404
