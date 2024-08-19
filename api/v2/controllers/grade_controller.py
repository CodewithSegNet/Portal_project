#!/usr/bin/python3


from app import db
from datetime import datetime
import re
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, SubmitField, IntegerField
from wtforms.validators import DataRequired

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
    Course,
    Department,
    Image 
)
from api.v2.controllers.homepage_controller import pages_bp
from api.v2.controllers.student_controller import user_bp





# Define student scores
class StudentScoreForm(FlaskForm):
    ca_score = IntegerField("CA Score", validators=[DataRequired()])
    exam_score = IntegerField("Exam Score", validators=[DataRequired()])
    course_code = StringField("Course code", validators=[DataRequired()])
    student_id = StringField("Student ID", validators=[DataRequired()])
    submit = SubmitField("Add Scores")




def calculate_grade_remark(total_score):
    if total_score >= 70:
        return "A", "Excellent"
    elif 65 <= total_score < 70:
        return "B", "V. Good"
    elif 60 <= total_score < 65:
        return "C", "Good"
    elif 55 <= total_score < 60:
        return "D", "Fair"
    elif 50 <= total_score < 55:
        return "E", "Pass"
    else:
        return "F", "Fail"
    
    
    
    


@pages_bp.route("/add_scores", methods=["POST"])
def add_scores():
    form = StudentScoreForm()

    if form.validate_on_submit():
        # Retrieve the student and course based on the form data
        student = Student.query.filter_by(admission_number=form.student_id.data).first()
        course = Course.query.filter_by(course_code=form.course_code.data).first()

        if student and course:
            # Calculate total score, grade, and remark
            total_score = form.ca_score.data + form.exam_score.data
            grade, remark = calculate_grade_remark(total_score)

            # Update the existing Course record with the new grades
            course.student_id = form.student_id.data
            course.course_code = form.course_code.data
            course.ca_score = form.ca_score.data
            course.exam_score = form.exam_score.data
            course.total_score = total_score
            course.grade = grade
            course.remark = remark

            # Commit the changes to the database
            db.session.commit()

            flash("Scores added successfully", "success")
            return redirect(url_for("pages.admindash"))
        else:
            flash("Invalid student or course ID", "danger")

    return render_template("pages/admin.html", form=form)