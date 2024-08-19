#!/usr/bin/env python3

# Import
from app import db
from api.v2.models.department_model import Department
import api.v2.models.student_model
from api.v2.models.semester import Semester
from datetime import datetime
from sqlalchemy.orm import relationship
import uuid



class FormImage(db.Model):
    __tablename__ = "photographs"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid7()), nullable=False)
    form_id = db.Column(db.String(36), db.ForeignKey("admission_forms.id"), nullable=False)
    image_data = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
