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
from models import (
    Student,
    Department,
    Semester,
    ContactMessage,
    Admin,
    AdmissionForm,
    FormImage,
    Newsletter,
    Specialadmin,
    Applicant,
    Image,
    Course,
    PaymentStatus,
)
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.student_controller import user_bp
from api.v2.controllers.images_controller import get_latest_image_info
from app import cache, db
from views import *




@user_bp.route("/super/admin/register", methods=["POST"])
def register_super_admin():
    """
    A function that handles admin registration
    """

    try:
        data = request.json
        existing_email = Specialadmin.query.filter_by(email=data["email"]).first()

        if existing_email:
            return jsonify({"error": "Email Already Exists!"}), 400

        # Create a new user instance
        new_user = Specialadmin(
            email=data["email"],
            password=generate_password_hash(data["password"]),
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow(),
        )

        db.session.add(new_user)
        db.session.commit()

        # Return JSON successful message if data's works
        return jsonify({"message": "Admin Registration Successfully Created!"}), 201

    # Handles database issues (connection or constraint violation)
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
    
    
@pages_bp.route("/super/admin/login", methods=["POST", "GET"])
def super_admin_login():
    """
    A route that handles applicant authentication
    """
    try:
        email = request.form.get("email")
        password = request.form.get("password")

        if email is None or password is None:
            return jsonify({"error": "Email and password are required."}), 400

        user = Specialadmin.query.filter_by(email=email).first()
        if user and user.check_password(password):
            """
            Create a JWT token
            """
            token = jwt.encode(
                {
                    "special_user_id": user.email,
                    "exp": datetime.utcnow() + timedelta(hours=2),
                },
                "secret_key",
                algorithm="HS256",
            )

            session["special_token"] = token
            session["special_user_id"] = user.email

            return redirect(url_for("pages.specialadmindashboard"))
        else:
            flash("Incorrect email or password. Please try agin.", "danger")
            return redirect(url_for("pages.speciallog"))
    except Exception as e:
        traceback.print_exc()
        flash(f"An error occurred: {str(e)}", "danger"), 500
        return redirect(url_for("pages.speciallog"))
    
    
    
    
    



@pages_bp.route("/super/admin/dashboard", methods=["GET"])
def specialadmindashboard():
    if "special_user_id" in session:
        email = session.get("special_user_id")
        token = session.get("special_token")

        if not email or not token:
            return jsonify({"error": "Unauthorized"}), 401

        user = Specialadmin.query.filter_by(email=email).first()

        # Fetch applicants
        applicants = Applicant.query.options(
            db.joinedload(Applicant.applicant_number)
        ).all()

        # Fetch images for each applicant
        applicants_with_images = []
        for applicant in applicants:
            form_number = applicant.email
            image_info = get_latest_image_info(form_number)
            if image_info:
                image_path = (
                    image_info["image_data"].decode("utf-8")
                    if isinstance(image_info["image_data"], bytes)
                    else image_info["image_data"]
                )
                # Ensure the path does not include "static/" prefix twice
                if image_path.startswith("static/"):
                    image_path = image_path[7:]
                applicant_image = image_path
            else:
                applicant_image = None

            applicants_with_images.append(
                {
                    "applicant": applicant,
                    "image": applicant_image,
                    "forms": applicant.applicant_number,
                }
            )

        image1 = os.path.join(
            current_app.config["UPLOAD_FOLDER"],
            "sunnah_college_logo-removebg-preview.png",
        )

        return render_template(
            "special_dashboard.html",
            user=user,
            user_image=image1,
            applicants=applicants_with_images,
        )
    else:
        return jsonify({"error": "Unauthorized"}), 401
    
    
    






@pages_bp.route("/approve_applicant/<string:email>", methods=["POST"])
def approve_applicant(email):
    # Find the applicant in the database
    applicant = Applicant.query.filter_by(email=email).first()

    if not applicant:
        return jsonify({"error": "Applicant not found"}), 404

    # Update the admission status to "Approved"
    for form in applicant.applicant_number:
        form.admissionstatus = "Approved"

    # Commit changes to the database
    db.session.commit()

    # Redirect to dashboard or appropriate page
    return redirect(url_for("pages.specialadmindashboard"))


@pages_bp.route("/reject_applicant/<string:email>", methods=["POST"])
def reject_applicant(email):
    # Find the applicant in the database
    applicant = Applicant.query.filter_by(email=email).first()

    if not applicant:
        return jsonify({"error": "Applicant not found"}), 404

    # Update the admission status to "Rejected"
    for form in applicant.applicant_number:
        form.admissionstatus = "Rejected"

    # Commit changes to the database
    db.session.commit()

    # Redirect to dashboard or appropriate page
    return redirect(url_for("pages.specialadmindashboard"))


@pages_bp.route("/delete_applicant/<string:email>", methods=["POST"])
def delete_applicant(email):
    # Find the applicant in the database
    applicant = Applicant.query.filter_by(email=email).first()

    if not applicant:
        return jsonify({"error": "Applicant not found"}), 404

    # Delete the applicant from the database
    db.session.delete(applicant)

    # Commit changes to the database
    db.session.commit()

    # Redirect to dashboard or appropriate page
    return redirect(url_for("pages.specialadmindashboard"))


@pages_bp.route("/view_applicant_info/<email>", methods=["GET"])
def view_applicant_info(email):
    applicant = Applicant.query.filter_by(email=email).first()

    if applicant:
        form_number = applicant.email
        image_info = get_latest_image_info(form_number)
        if image_info:
            image_path = (
                image_info["image_data"].decode("utf-8")
                if isinstance(image_info["image_data"], bytes)
                else image_info["image_data"]
            )
            if image_path.startswith("static/"):
                image_path = image_path[7:]
            applicant_image = image_path
        else:
            applicant_image = "sunnah_college_logo-removebg-preview.png"

        user_id = applicant.applicant_number

        return render_template(
            "view_applicant.html",
            user_image=applicant_image,
            applicant=applicant,
            user_id=user_id,
        )
    else:
        return jsonify({"error": "Applicant not found"}), 404




