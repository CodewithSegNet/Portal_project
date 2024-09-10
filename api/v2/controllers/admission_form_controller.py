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


from api.v2.models import (
    AdmissionForm,
    FormImage,
)

# 3. Local Application Imports
from app import db
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.student_controller import user_bp



@pages_bp.route("/admission-form", methods=["POST"])
def admission_form():
    """
    A route that handles the applicant registration form
    ---
    tags:
      - Admission
    requestBody:
      content:
        multipart/form-data:
          schema:
            type: object
            properties:
              first_name:
                type: string
                description: Applicant's first name
              last_name:
                type: string
                description: Applicant's last name
              email:
                type: string
                format: email
                description: Applicant's email address
              photograph:
                type: string
                format: binary
                description: Photograph of the applicant
    responses:
      302:
        description: Redirect to success page
      400:
        description: Bad request, invalid input
    """

    user_email = session.get("reg_user_id")

    if not user_email:
        return redirect(url_for("pages.registerapplicant"))

    if request.method == "POST":
        applicant_data = request.form.to_dict()
        photograph_file = request.files.get("photograph")

        if photograph_file and allowed_file(photograph_file.filename):
            # save the photograph
            filename = secure_filename(photograph_file.filename)
            filepath = os.path.join(current_app.config["UPLOAD_FOLDER"], filename)
            photograph_file.save(filepath)
            # Ensure user_email is not None before setting form_number
            if user_email:
                # Set the form_number to the user_email
                applicant_data["form_number"] = user_email

            # Check if an admission form already exists for the current user
            existing_form = AdmissionForm.query.filter_by(
                form_number=user_email
            ).first()

            if existing_form:
                form_id = existing_form.id
            else:
                # Create a new form if it doesn't exist
                admission_form = AdmissionForm(**applicant_data)
                db.session.add(admission_form)
                db.session.commit()  # Commit the AdmissionForm
                form_id = admission_form.id  # Get the form_id

            # Create a new FormImage instance with the form_id
            form_image = FormImage(form_id=form_id, image_data=filepath)
            db.session.add(form_image)

        # Commit changes to the database
        db.session.commit()

        return redirect(url_for("pages.success"))

    return render_template("application_form.html")