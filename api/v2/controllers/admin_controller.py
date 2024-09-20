#!/usr/bin/env python3

# 1. Standard Library Imports
import jwt
import traceback
import requests
from datetime import datetime, timedelta

# 2. Third-Party Imports
from flask import (
    current_app,
    request,
    Blueprint,
    jsonify,
    url_for,
    session,
    redirect,
    flash,
    render_template

)
from functools import wraps
from config import UPLOAD_FOLDER, allowed_file
import json
import traceback
import base64
import requests
from urllib.parse import quote, unquote
from sqlalchemy import and_
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
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from dotenv import load_dotenv
import time
import traceback

from api.v2.models import (
    Student,
    Admin,
    Department,
    Semester
)

from api.v2.controllers.images_controller import get_latest_image_info
from api.v2.controllers.grade_controller import  StudentScoreForm, calculate_grade_remark

# 3. Local Application Imports
from app import db
from api.v2.models import (
    Student,
    Admin,
    Course 
)
from api.v2.controllers.student_controller import get_student_info
from flask_restx import Namespace, Resource, fields
from api.v2.controllers.homepage_controller import pages_bp




user_bp = Blueprint("user", __name__, template_folder="templates")
admin_ns = Namespace('admins', description='admin related operations')

# /****************************************** ADMINS ROUTES ************************************************/

@admin_ns.route("/register")
class AdminRegister(Resource):
    def post(self):
        """
        A function that handles admin registration
        """

        try:
            data = request.json
            existing_email = Admin.query.filter_by(email=data["email"]).first()

            if existing_email:
                return {"error": "Email Already Exists!"}, 400

            # Create a new user instance
            new_user = Admin(
                email=data["email"],
                password=generate_password_hash(data["password"]),
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
            )

            db.session.add(new_user)
            db.session.commit()

            # Return JSON successful message if data's works
            return {"message": "Admin Registration Successfully Created!"}, 201

        # Handles database issues (connection or constraint violation)
        except SQLAlchemyError as e:
            db.session.rollback()
            return {"error": str(e)}, 500
# /****************************************** END OF ADMINS ROUTES ************************************************/


# /****************************************** ADMIN ROUTES ************************************************/

# Define the API model for input validation
login_model = admin_ns.model('Login', {
    'email': fields.String(required=True, description='admin email'),
    'password': fields.String(required=True, description='admin password')
})


@admin_ns.route("/login")
class AdminLogin(Resource):
    @admin_ns.expect(login_model)
    def post(self):
        """
        A route that handles admin authentication
        """
        try:
            data = request.json
            email = data.get("email")
            password = data.get("password")

            if email is None or password is None:
                return {"error": "Email and password are required."}, 400

            user = Admin.query.filter_by(email=email).first()
            if user and user.check_password(password):
                """
                Create a JWT token
                """
                access_token = create_access_token(identity=user.email, expires_delta=timedelta(hours=2))

                
                response = {
                    'token': access_token,
                    'admin_user_id': user.email
                }
            
                session["admin_token"] = access_token  
                session["admin_user_id"] = user.email 

                return response, 200
            else:
                flash("Incorrect email or password. Please try agin.", "danger")
                return{'message': 'Invalid Credential'}, 401
        except Exception as e:
            logging.error(f"An error occurred: {str(e)}")
            return{'message': f'An error occured: {str(e)}'}, 500


# authenticate and authorize requests using JWT
def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")

        if not token:
            return jsonify({"error": "Token is missing"}), 401

        try:
            data = jwt.decode(token, "secret_key", algorithms=["HS256"])
            current_user = Student.query.get(data["user_id"])
        except:
            return jsonify({"error": "Token is invalid"}), 401

        return func(current_user, *args, **kwargs)

    return decorated


# Function to make authorized requests
def make_authorized_request(url, method="GET", data=None, token=None):
    token = token or session.get("token")

    if token:
        headers = {"Authorization": f"Bearer {token}"}

        try:
            if method == "GET":
                response = requests.get(url, headers=headers)
            elif method == "POST":
                response = requests.post(url, headers=headers, data=data)
            # Add other request methods as needed

            response.raise_for_status()  # Raise an error for 4xx or 5xx status codes
            return response.json() if response.ok else {"error": "Request failed"}

        except requests.exceptions.RequestException as e:
            return {"error": f"Request failed: {e}"}

    return {"error": "Token is missing"}


# /****************************************** END OF  ADMIN ROUTES ************************************************/


@pages_bp.route("/admins/dashboard", methods=["GET"])
def admin_dashboard():
    if "admin_user_id" in session:
        email = session.get("admin_user_id")
        token = session.get("admin_token")

        if not email or not token:
            return jsonify({"error": "Unauthorized"}), 401

        user = Admin.query.filter_by(email=email).first()

        # Retrieve student_info from the query parameters
        student_info_param = request.args.get("student_info")

        if student_info_param is None:
            # Handle the case where student_info_param is None
            student_info = None
            image_info = None
        else:
            # Decode the URL-encoded JSON string
            student_info_param_decoded = unquote(student_info_param)

            # Decode again in case of double encoding
            student_info = json.loads(unquote(student_info_param_decoded))

            # Get image information
            image_info = get_latest_image_info(student_info.get("admission_number"))

        image1 = url_for('static', filename='img/sunnah_college_logo-removebg-preview.png')

        form = StudentScoreForm()

        return render_template(
            "admin.html",
            user=user,
            user_image=image1,
            os=os,
            student_info=student_info,
            image_info=image_info,
            form=form,
            token=token
        )
    else:
        return jsonify({"error": "Unauthorized"}), 401
    
    
    
    
def save_student_info(admission_number, updated_courses):
    # Retrieve the student record from the database using admission number
    student = Student.query.filter_by(admission_number=admission_number).first()

    if not student:
        flash("Student not found", "danger")
        return

    # Clear existing courses if necessary
    student.courses.clear()  
    # Loop through updated courses and create new Course objects
    for course_data in updated_courses:
        course = Course(
            course_code=course_data['course_code'],
            course_title=course_data['course_title'],
            credit=course_data['credit'],
            ca_score=course_data['ca_score'],
            exam_score=course_data['exam_score']
        )
        student.courses.append(course)

    try:
        db.session.commit() 
        flash("Student information updated successfully", "success")
    except Exception as e:
        db.session.rollback()  
        flash(f"Error updating student information: {str(e)}", "danger")
   


@pages_bp.route("/admins/update_student_info", methods=["POST"])
def update_student_info():
    try:
        # Parse form data from the request
        form_data = request.form.to_dict(flat=False)

        # Extract the admission number from the form data
        admission_numbers = form_data.get('student_info[0][admission_number]', [None])
        if not admission_numbers or not admission_numbers[0]:
            flash("Admission number is missing.", "danger")
            return redirect(url_for('pages.admin_dashboard'))

        admission_number = admission_numbers[0]

        # Find the student using the admission number
        student = Student.query.filter_by(admission_number=admission_number).first()
        if not student:
            flash("Student not found", "danger")
            return redirect(url_for('pages.admin_dashboard'))

        # Process and update each course entry
        for i in range(len(student.courses)):
            course_code = form_data.get(f'courses[{i}][course_code]', [None])[0]
            course_title = form_data.get(f'courses[{i}][course_title]', [None])[0]
            credit = form_data.get(f'courses[{i}][credit]', [None])[0]
            ca_score = form_data.get(f'courses[{i}][ca_score]', [None])[0]
            exam_score = form_data.get(f'courses[{i}][exam_score]', [None])[0]

            # Ensure numeric fields are converted to integers
            credit = int(credit) if credit else 0
            ca_score = int(ca_score) if ca_score else 0
            exam_score = int(exam_score) if exam_score else 0

            # Calculate total score and determine grade
            total_score = ca_score + exam_score
            grade, remark = calculate_grade_remark(total_score)

            # Find the course to update
            course = student.courses[i]
            course.course_code = course_code
            course.course_title = course_title
            course.credit = credit
            course.ca_score = ca_score
            course.exam_score = exam_score
            course.total_score = total_score
            course.grade = grade
            course.remark = remark

        # Commit changes to the database
        db.session.commit()
        flash("Student information updated successfully", "success")

    except Exception as e:
        db.session.rollback()
        flash(f"Error updating student information: {str(e)}", "danger")

    return redirect(url_for('pages.admin_dashboard'))



@pages_bp.route('/filter-courses', methods=["GET"])
def filter_course():
    access_token = session.get('admin_token')
    
    if not access_token:
        return jsonify({"error": "Unauthorized"}), 401

    # Get query parameters from request
    course_code = request.args.get('course_code')
    department_name = request.args.get('department_name')
    department_level = request.args.get('department_level')
    page = request.args.get('page', 1, type=int)

    # Query the database for students based on the filters
    query = db.session.query(Student).join(Course).join(Department).filter(
        Course.course_code == course_code,
        Student.department_name == department_name,
        Department.department_level == department_level,
    )

    # Paginate the result (e.g., 10 students per page)
    paginated_students = query.paginate(page=page, per_page=10, error_out=False)
    students_data = paginated_students.items

    # Initialize student_info and image_info, if not present
    student_info = request.args.get("student_info")
    if student_info:
        student_info = json.loads(unquote(student_info))
        image_info = get_latest_image_info(student_info.get("admission_number"))
    else:
        student_info = None  # Ensure student_info is always defined
        image_info = None
        
    form = StudentScoreForm()

    # Pass the necessary variables to the template
    return render_template(
        "admin.html",
        students=students_data,
        course_code=course_code,
        department_name=department_name,
        department_level=department_level,
        current_page=paginated_students.page,
        pages=paginated_students.pages,
        user=access_token,
        student_info=student_info,
        image_info=image_info,
        form=form
    )




@pages_bp.route('/update-ca-scores', methods=['POST'])
def update_ca_scores():
    course_code = request.form.get('course_code')
    department_name = request.form.get('department_name')
    department_level = request.form.get('department_level')
    
    ca_scores = request.form.get('ca_scores')
    
    for student_id, new_ca_score in ca_scores.items():
        student = Student.query.get(student_id)
        if student:
            student.ca_score = new_ca_score
            db.session.add(student)
    
    db.session.commit()
    
    flash('CA Scores updated successfully!', 'success')
    return redirect(url_for('pages.filter_courses', course_code=course_code, department_name=department_name, department_level=department_level))