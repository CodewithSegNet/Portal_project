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
from controllers import pages_bp

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
  ContactMessage
)

# 3. Local Application Imports
from app import db,  cache
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.student_controller import user_bp
from api.v2.controllers.images_controller import get_latest_image_info




@pages_bp.route("/contact-message", methods=["POST"])
def contact_message():
    if request.method == "POST":
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        subject = data.get("subject")
        phone = data.get("phone")
        message = data.get("message")

        # Create a new ContactMessage instance
        new_message = ContactMessage(
            name=name, email=email, subject=subject, phone=phone, message=message
        )

        db.session.add(new_message)
        db.session.commit()

        response_message = "Thank you for reaching out to us. Your message has been received, and we assure you that our team will promptly address your inquiry and provide a timely response"
        return jsonify({"message": response_message}), 200