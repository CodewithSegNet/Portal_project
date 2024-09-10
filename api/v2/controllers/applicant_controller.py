#!/usr/bin/env python3
from flask import (
    jsonify,
    request,
    url_for,
    session,
    redirect,
    flash,
)
import traceback
import jwt
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime, timedelta
import traceback
from models import (
    Applicant,
)

# 1. Standard Library Imports
import jwt
import traceback
import requests
from datetime import datetime, timedelta

# 2. Third-Party Imports
from flask import (
    current_app,
    render_template,
    request,
    url_for,
    session,
    redirect,
)
from config import allowed_file
import traceback
import requests
import jwt
import logging
from werkzeug.utils import secure_filename
import os
import pymysql
from MySQLdb import OperationalError
from dotenv import load_dotenv
import time
import traceback
from werkzeug.security import generate_password_hash, check_password_hash



from api.v2.models import (
    AdmissionForm,
    FormImage,
)

# 3. Local Application Imports
from app import db,  cache
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.images_controller import get_latest_image_info




@pages_bp.route("/applicant-page", methods=["POST", "GET"])
def applicant_page():
    """
    A route that handles applicant authentication
    """
    try:
        email = request.form.get("email")
        password = request.form.get("password")

        if email is None or password is None:
            return jsonify({"error": "Email and password are required."}), 400

        user = Applicant.query.filter_by(email=email).first()
        if user and user.check_password(password):
            """
            Create a JWT token
            """
            token = jwt.encode(
                {
                    "admin_user_id": user.email,
                    "exp": datetime.utcnow()
                    + timedelta(hours=2),  # Token expiration time
                },
                "secret_key",
                algorithm="HS256",
            )

            session["applicant_token"] = token  # Store the token in the session
            session["applicant_user_id"] = user.email  # Store user ID in the session

            return redirect(url_for("pages.applicantboard"))
        else:
            flash("Incorrect email or password. Please try agin.", "danger")
            return redirect(url_for("pages.applicantlogin"))
    except Exception as e:
        traceback.print_exc()
        flash(f"An error occurred: {str(e)}", "danger"), 500
        return redirect(url_for("pages.applicantlogin"))







@pages_bp.route("/register-applicant", methods=["GET", "POST"])
def register_applicant():
    """
    A function that handles admin registration
    """

    if request.method == "POST":
        try:
            if not session.get("is_paid"):
                return jsonify({"error": "Payment not verified"}), 400

            data = request.form
            email = session.get("email")
            existing_email = Applicant.query.filter_by(email=data["email"]).first()

            if existing_email:
                return jsonify({"error": "Email Already Exists!"}), 400

            # Create a new user instance
            new_user = Applicant(
                email=data["email"],
                phonenumber=data["phonenumber"],
                password=generate_password_hash(data["password"]),
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                is_paid=True,
            )

            db.session.add(new_user)
            db.session.commit()

            # clear email and payment status from session
            session.pop("email", None)
            session.pop("is_paid", None)

            session["reg_user_id"] = data["email"]

            # Return JSON successful message if data's works
            return redirect(url_for("pages.form"))

        # Handles database issues (connection or constraint violation)
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500
        
        
        
        
        
        
@pages_bp.route("/applicant-dashboard", methods=["GET"])
@cache.cached(timeout=500)  # Assuming you're using caching
def applicant_dashboard():
    """
    Route that handles the applicant dashboard page.
    """
    if "applicant_user_id" in session:
        email = session.get("applicant_user_id")
        token = session.get("applicant_token")

        if not email or not token:
            return jsonify({"error": "Unauthorized"}), 401

        # Retrieve applicant details from database
        user = Applicant.query.filter_by(email=email).first()

        if not user:
            return (
                render_template("applicant_login_page.html", message="User not found"),
                400,
            )

        # Fetch applicant number or other necessary details
        user_id = user.applicant_number

        # Assuming you have a function like get_latest_image_info
        image_info = get_latest_image_info(user.email)

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

        # Example default image if applicant_image is None
        user_image = os.path.join(
            current_app.config["UPLOAD_FOLDER"], "sunnahlogo.avif"
        )

        # Render the template with the necessary data
        return render_template(
            "applicant_dashboard.html",
            user=user,
            user_id=user_id,
            applicant_image=applicant_image,
            user_image=user_image,
        )

    # If 'applicant_user_id' is not in the session, redirect to login
    return redirect(url_for("pages.applicant_login"))