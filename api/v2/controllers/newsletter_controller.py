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
from app import cache, db
from views import *



@pages_bp.route("/newsletter", methods=["POST"])
def newsletter():
    if request.method == "POST":
        data = request.get_json()
        email = data.get("email")

        if not email:
            return jsonify({"error": "Email address is required"}), 400

        # Create a new Newsletter instance
        subscriber = Newsletter(email=email)

        db.session.add(subscriber)
        db.session.commit()

        response_message = "Thank you for subscribing! We appreciate your support and look forward to providing you with valuable content."
        return jsonify({"message": response_message}), 200
