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
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.exceptions import Forbidden
from api.v2.controllers.admin_controller import admin_ns, login_model
from flask_restx import Namespace, Resource, fields


# Define the Namespace for the student API
notification_ns = Namespace('notification', description='notification related operations')



@notification_ns.route('/')
class Notifications(Resource):
    @jwt_required()  
    def post(self):
        """
        An Endpoint to send notifications to student
        """
        
        admin_id = get_jwt_identity()
        admin = Admin.query.filter_by(email=admin_id).first()
        
        if not admin:
            raise Forbidden("You are not authorized to perform this action.")
        
        
        data = request.get_json()

        # Validate input
        if not all(key in data for key in ['name', 'message']):
            return {"success": False, "message": "Missing required fields"}, 400
        
        # Create the notification
        notification = Notification(
            name=data['name'],
            message=data['message']
        )
        
        # Add related semesters if provided
        if 'semesters' in data:
            for semester_id in data['semesters']:
                semester = Semester.query.get(semester_id)
                if semester:
                    notification.semesters.append(semester)
        
        # Add related departments if provided
        if 'department_name' in data:
            for department_id in data['department_name']:
                department = Department.query.get(department_id)
                if department:
                    notification.departments.append(department)

        # Handle sending to specific department based on name and level
        if 'department_name' in data and 'department_level' in data:
            departments = Department.query.filter_by(
                department_name=data['department_name'],
                department_level=data['department_level']
            ).all()
            for department in departments:
                notification.departments.append(department)
                
        if 'semesters' in data:
            semester = Semester.query.filter_by(
                semester = data['semesters']
            ).all()
            for semester in semester:
                notification.semesters.append(semester)

        # Handle sending to all students in provided semesters
        if 'semesters' in data:
            for semester_id in data['semesters']:
                students = Student.query.join(Student.semesters).filter(Semester.id == id).all()
                for student in students:
                    notification.students.append(student)
        
        # Handle sending to all students in a specific department
        if 'department_name' in data:
            students = Student.query.filter_by(department_name=data['department_name']).all()
            for student in students:
                notification.students.append(student)

        # Handle sending to everybody
        if data.get('send_to_everybody', False):
            all_students = Student.query.all()
            notification.students.extend(all_students)

        # Save the notification to the database
        db.session.add(notification)
        db.session.commit()

        return {"success": True, "message": "Notification sent successfully"}, 201
    
    
    
@notification_ns.route('/')
class NotificationList(Resource):
    @jwt_required()
    def get(self):
        """
        Endpoint to retrieve paginated notifications.
        """
        page = request.args.get('page', 1, type=int)
        per_page = 10 
        
        # Retrieve paginated notifications from the database
        notifications = Notification.query.paginate(page=page, per_page=per_page, error_out=False)

        return render_template(
            'notifications.html',
            notifications=notifications.items,
            page=page,
            total_pages=notifications.pages
        )