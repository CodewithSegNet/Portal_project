# Import
from app import db
from api.v2.models.department_model import Department
import api.v2.models.student_model
from api.v2.models.semester import Semester
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid


class Course(db.Model):
    """
    A class that defines the Course Description
    """

    __tablename__ = "courses"
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    course_code = db.Column(db.String(20), nullable=False)
    student_id = db.Column(
        db.String(50), db.ForeignKey("students.admission_number"), nullable=False
    )
    course_title = db.Column(db.String(255), nullable=False)
    credit = db.Column(db.Integer, nullable=False)
    ca_score = db.Column(db.Integer, nullable=True)
    exam_score = db.Column(db.Integer, nullable=True)
    total_score = db.Column(db.Integer, nullable=True)
    grade = db.Column(db.String(5), nullable=True)
    remark = db.Column(db.String(255), nullable=True)