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
    Admin
)

from api.v2.controllers.images_controller import get_latest_image_info

# 3. Local Application Imports
from app import db
from api.v2.models import (
    Student,
    Admin, 
)
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.student_controller import user_bp



# /****************************************** ADMINS ROUTES ************************************************/
@user_bp.route("/admin/register", methods=["POST"])
def register():
    """
    A function that handles admin registration
    """

    try:
        data = request.json
        existing_email = Student.query.filter_by(email=data["email"]).first()

        if existing_email:
            return jsonify({"error": "Email Already Exists!"}), 400

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
        return jsonify({"message": "Admin Registration Successfully Created!"}), 201

    # Handles database issues (connection or constraint violation)
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
# /****************************************** END OF ADMINS ROUTES ************************************************/


# /****************************************** ADMIN ROUTES ************************************************/


@pages_bp.route("/admin", methods=["POST"])
def admin():
    """
    A route that handles admin authentication
    """
    try:
        email = request.form.get("email")
        password = request.form.get("password")

        if email is None or password is None:
            return jsonify({"error": "Email and password are required."}), 400

        user = Admin.query.filter_by(email=email).first()
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

            session["admin_token"] = token  # Store the token in the session
            session["admin_user_id"] = user.email  # Store user ID in the session

            return redirect(url_for("pages.admindash"))
        else:
            flash("Incorrect email or password. Please try agin.", "danger")
            return redirect(url_for("pages.signinadmin"))
    except Exception as e:
        traceback.print_exc()
        flash(f"An error occurred: {str(e)}", "danger"), 500
        return redirect(url_for("pages.signinadmin"))


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


@pages_bp.route("/admin/dashboard", methods=["GET"])
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

        image1 = os.path.join(current_app.config["UPLOAD_FOLDER"], "sunnahlogo.avif")

        form = StudentScoreForm()

        return render_template(
            "admin.html",
            user=user,
            user_image=image1,
            os=os,
            student_info=student_info,
            image_info=image_info,
            form=form,
        )
    else:
        return jsonify({"error": "Unauthorized"}), 401