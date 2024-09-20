#!/usr/bin/env python3

# Import
from app import db
import api.v2.models.student_model
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from api.v2.models.notifications import notification_semester

import uuid


class Semester(db.Model):
    """
    A class that defines the Semester Description
    """

    __tablename__ = "semesters"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    semester = db.Column(db.String(20), nullable=False)
    notifications = db.relationship('Notification', secondary=notification_semester, back_populates='semesters')
    student_id = db.Column(
        db.String(50), db.ForeignKey("students.admission_number"), nullable=False
    )
    
    
