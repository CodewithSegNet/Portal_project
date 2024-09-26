#!/usr/bin/env python3
from flask import (
    current_app,
    jsonify,
    request,
    url_for,
    session,
    redirect,
    make_response,
)
from functools import wraps
from config import  allowed_file
import os
import pymysql
from MySQLdb import OperationalError
from dotenv import load_dotenv
import traceback
from api.v2.models import (
    AdmissionForm,
    FormImage,
    Image, 
)
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.student_controller import user_bp
from app import db



def allowed_file(filename):
    allowed_extensions = {"png", "jpg", "jpeg", "gif", "webp", "avif"}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions




@pages_bp.route("/upload-image", methods=["POST"])
def upload_image():
    try:
        if "user_id" in session:
            print("Request files:", request.files)
            admission_number = session.get("user_id")
            token = session.get("token")

            if not admission_number or not token:
                return jsonify({"error": "Unauthorized"}), 401

            file = request.files["pics"]

            if file and allowed_file(file.filename):
                filename = file.filename
                image_data = os.path.join(current_app.config["UPLOAD_FOLDER"], filename)
                file.save(image_data)

                # Create a new image record and associate it with the student
                image = Image(
                    student_admission_number=admission_number, image_data=image_data
                )
                db.session.add(image)
                db.session.commit()

                # Redirect back to the dashboard
                return redirect(url_for("pages.student_dashboard"))

            return jsonify({"error": "No file uploaded"}), 400
    except Exception as e:
        # Log or print the exception for debugging
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": "File upload failed"}), 500




@pages_bp.route("/view_image/<image_id>", methods=["GET"])
def view_image(image_id):
    form_image = FormImage.query.get(image_id)
    if form_image:
        response = make_response(form_image.image_data)
        response.headers["Content-Type"] = "image/jpeg"

    else:
        return "Image not found", 404




def get_latest_image_info(admission_number):
    if admission_number:
        # Retrieve the latest image associated with the student
        image = (
            Image.query.filter_by(student_admission_number=admission_number)
            .order_by(Image.created_at.desc())
            .first()
        )

        if image and image.image_data:
            return {
                "image_data": image.image_data,
                "mimetype": "image/jpeg",
            }

    return None





def get_latest_image_info(email):
    if email:
        # Retrieve the latest image associated with the applicant
        form = (
            AdmissionForm.query.filter_by(form_number=email)
            .order_by(AdmissionForm.id.desc())
            .first()
        )

        if form:
            image = (
                FormImage.query.filter_by(form_id=form.id)
                .order_by(FormImage.created_at.desc())
                .first()
            )

            if image and image.image_data:
                return {
                    "image_data": image.image_data,
                    "mimetype": "image/jpeg",
                }

    return None


