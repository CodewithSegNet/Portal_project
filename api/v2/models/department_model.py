#!/usr/bin/env python3

# Import
from app import db
import api.v2.models.student_model
from api.v2.models.semester import Semester
from api.v2.models.notifications import notification_department
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid


class Department(db.Model):
    """
    A class that defines the Student Department
    """

    __tablename__ = "departments"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    department_level = db.Column(db.Integer, nullable=False)
    department_name = db.Column(db.String(255), nullable=False)
    notifications = db.relationship('Notification', secondary=notification_department, back_populates='departments')
    student_id = db.Column(
        db.String(50), db.ForeignKey("students.admission_number"), nullable=False
    )
    
    
