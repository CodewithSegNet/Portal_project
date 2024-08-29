#!/usr/bin/env python3

# Import
from app import db
from api.v2.models.department_model import Department
import api.v2.models.student_model
from api.v2.models.semester import Semester
from datetime import datetime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid


class Image(db.Model):
    __tablename__ = "images"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    student_admission_number = db.Column(
        db.String(50), db.ForeignKey("students.admission_number"), nullable=False
    )
    image_data = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
