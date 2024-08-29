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
    Admin,
    Notification
)
from app import cache, db
from views import *
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.exceptions import Forbidden
from api.v2.controllers.admin_controller import admin_ns, login_model
from flask_restx import Namespace, Resource, fields


@admin_ns.route('/notifications')
class Notification(Resource):
    @admin_ns.expect(login_model)
    def post(self):
        """
        An Endpoint to send notifications to student
        """
        
        admin_id = get_jwt_identity()
        admin = Admin.query.get(admin_id)
        
        if not admin:
            raise Forbidden("You are not authorized to perform this action.")
        
        
        data = request.get_json()
        
        # validate input
        if not all(key in data for key in ['name', 'subject', 'messages', 'semesters', 'department_name', 'department_level']):
            return jsonify({"success": False, "message": "Missing required fields"}), 400
        
        # Create the notification
        notification = Notification(
            name=data['name'],
            subject=data['subject'],
            message=data['message']
        )

        # Add related semesters
        for semester_id in data['semesters']:
            semester = Semester.query.get(semester_id)
            if semester:
                notification.semesters.append(semester)

        # Add related departments
        for department_id in data['department_name']:
            department = Department.query.get(department_id)
            if department:
                notification.departments.append(department)

        # Save the notification to the database
        db.session.add(notification)
        db.session.commit()

        return jsonify({"success": True, "message": "Notification sent successfully"}), 201 
        
        
        
        
        