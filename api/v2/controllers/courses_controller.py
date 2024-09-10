#!/usr/bin/env python3

# Import
from api.v2.models import (
    Student,
    Department,
    Semester,
    Course,
    Applicant,
)
from api.v2.models import Department
from api.v2.models import Semester
from api.v2.models.course_model import Course
import api.v2.models.student_model

from api.v2.models import Admin
from api.v2.models import Applicant
from api.v2.models import Image
from app import db



# /****************************************** COURSES ************************************************/
def assign_courses(user, department_name, department_level, semester_name):
    print(f"Assigning courses for {user.name}, {department_name} {department_level} {semester_name}")

    # Add specific courses for the department and department level to the new user
    if (
        department_name == "Pharmacy Technician"
        and department_level == 100
        and semester_name == "first"
        
    ):
        course1 = Course(
            course_title="Anatomy and Physiology 1", course_code="GNP 111", credit=3
        )
        course2 = Course(
            course_title="General and Physical Chemistry",
            course_code="BCH 111",
            credit=3,
            student_id=user.admission_number

        )
        course3 = Course(
            course_title="Algebra and Elementary Trigonometry",
            course_code="MTH 112",
            credit=3,
        )
        course4 = Course(
            course_title="Supervised Pharmacy practice", course_code="PCT 112", credit=6
        )
        course5 = Course(course_title="Pharmacology 1", course_code="PCT 111", credit=3)
        course6 = Course(course_title="Use of English", course_code="GNS 101", credit=3)
        course7 = Course(course_title="PHC Management", course_code="CHE 261", credit=3)

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7]
        )

    #  Add specific courses for the department and department level to the new user
    if (
        department_name == "Pharmacy Technician"
        and department_level == 100
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Mechanics and Properties of matter and Heart Energy",
            course_code="BPH 111",
            credit=3,
        )
        course2 = Course(
            course_title="Anatomy and Physiology II", course_code="GNP 121", credit=3
        )
        course3 = Course(
            course_title="Intro to Computer", course_code="COM 111", credit=3
        )
        course4 = Course(
            course_title="General Laboratory", course_code="GLT 111", credit=3
        )
        course5 = Course(
            course_title="Intro to dispensing theory and practical",
            course_code="PCT 121",
            credit=3,
        )
        course6 = Course(
            course_title="Communication in English", course_code="GNS 102", credit=3
        )
        course7 = Course(
            course_title="Supervised Pharmacy Practice", course_code="PCT 122", credit=6
        )

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7]
        )

    # Pharmacy Technician 200 first semester

    if (
        department_name == "Pharmacy Technician"
        and department_level == 200
        and semester_name == "first"
    ):
        course1 = Course(
            course_title="Dispensing theory 1", course_code="PCT 122", credit=2
        )
        course2 = Course(
            course_title="Dispensing practical 1", course_code="PCT 212", credit=4
        )
        course3 = Course(
            course_title="Intro to Drug & Quality Assurance",
            course_code="PCT 213",
            credit=2,
        )
        course4 = Course(
            course_title="Supervised Pharmacy Practice", course_code="PCT 214", credit=6
        )
        course5 = Course(course_title="Statistics", course_code="STA 111", credit=2)
        course6 = Course(
            course_title="Organic and Inorganic Chemistry",
            course_code="BCH 121",
            credit=3,
        )
        course7 = Course(
            course_title="Sources of Water and Sanitation",
            course_code="EHT 123",
            credit=2,
        )
        course8 = Course(
            course_title="Technical Drawing", course_code="PTD 111", credit=3
        )
        course9 = Course(
            course_title="Introduction to Microbology", course_code="STB 111", credit=3
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )
        
    # Pharmacy Technician 200 second semester
    if (
        department_name == "Pharmacy Technician"
        and department_level == 200
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Dispensing theory II", course_code="PCT 221", credit=3
        )
        course2 = Course(
            course_title="Dispensing practical II", course_code="PCT 222", credit=2
        )
        course3 = Course(
            course_title="Supervised Pharmacy Practice", course_code="PCT 223", credit=6
        )
        course4 = Course(
            course_title="Principle of pharmacy Technician practice",
            course_code="PCT 224",
            credit=2,
        )
        course5 = Course(
            course_title="Pharmacology II", course_code="GNP 214", credit=2
        )
        course6 = Course(
            course_title="Drugs Revolving Fund", course_code="CHE 256", credit=2
        )
        course7 = Course(
            course_title="Food and Nutrition", course_code="FST 215", credit=3
        )

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7]
        )

    # Pharmacy Technician 300 first semester

    if (
        department_name == "Pharmacy Technician"
        and department_level == 300
        and semester_name == "first"
    ):
        course1 = Course(
            course_title="Research Methodology", course_code="GNS 228", credit=6
        )
        course2 = Course(
            course_title="Family Planning and Reproductive Health",
            course_code="GNP 221",
            credit=3,
        )
        course3 = Course(course_title="Citizenship", course_code="GNS 111", credit=3)
        course4 = Course(
            course_title="Pharmacy Laws and Ethics", course_code="PCT 312", credit=2
        )
        course5 = Course(
            course_title="Supervised Pharmacy Practice", course_code="PCT 313", credit=6
        )
        course6 = Course(
            course_title="Actions and Uses of Common Medicine",
            course_code="PCT 314",
            credit=4,
        )

        # Add courses to the database session
        db.session.add_all([course1, course2, course3, course4, course5, course6])

        # Assign the courses to the new user
        user.courses.extend([course1, course2, course3, course4, course5, course6])

    # Pharmacy Technician 300 second semester
    if (
        department_name == "Pharmacy Technician"
        and department_level == 300
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Intro to Medical Sociolgy", course_code="GNS 213", credit=2
        )
        course2 = Course(
            course_title="Entrepreneurship", course_code="BUS 213", credit=2
        )
        course3 = Course(
            course_title="Research/Project Writing", course_code="CHE 265", credit=6
        )
        course4 = Course(course_title="Seminar", course_code="PCT 311", credit=3)

        # Add courses to the database session
        db.session.add_all([course1, course2, course3, course4])

        # Assign the courses to the new user
        user.courses.extend([course1, course2, course3, course4])

        # Add specific courses for the department Community Health Extention
    if (
        department_name == "Community Health Extention"
        and department_level == 100
        and semester_name == "first"
    ):
        course1 = Course(course_title="Use of English", course_code="GNS 101", credit=2)
        course2 = Course(
            course_title="Professional Ethics", course_code="CHE 211", credit=1
        )
        course3 = Course(
            course_title="Anatomy and Physiology I", course_code="CHE 212", credit=2
        )
        course4 = Course(
            course_title="Behaviour Change Communications",
            course_code="CHE 213",
            credit=2,
        )
        course5 = Course(
            course_title="Citizenship Education", course_code="GNS 111", credit=1
        )
        course6 = Course(
            course_title="Human Nutrition", course_code="CHE 214", credit=2
        )
        course7 = Course(
            course_title="Intro to Primary Health Care", course_code="CHE 215", credit=2
        )
        course8 = Course(
            course_title="Intro to Psychology", course_code="GNS 411", credit=1
        )
        course9 = Course(
            course_title="Intro to Environmental Health",
            course_code="EHT 111",
            credit=2,
        )
        course10 = Course(course_title="Geography", course_code="FOT 111", credit=1)
        course11 = Course(
            course_title="Intro to Computer", course_code="COM 111", credit=2
        )
        course12 = Course(
            course_title="Intro to Medical Sociology", course_code="GNS 213", credit=2
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
                course10,
                course11,
                course12,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
                course10,
                course11,
                course12,
            ]
        )

    #  Add specific courses for the department and department level to the new user
    if (
        department_name == "Community Health Extention"
        and department_level == 100
        and semester_name == "second"
    ):
        course1 = Course(course_title="Symptomatology", course_code="CHE 221", credit=2)
        course2 = Course(
            course_title="Population Dynamics and Family Planning",
            course_code="CHE 222",
            credit=3,
        )
        course3 = Course(
            course_title="Clinical Skills I", course_code="CHE 223", credit=3
        )
        course4 = Course(
            course_title="Science Laboratory Technology",
            course_code="STB 211",
            credit=3,
        )
        course5 = Course(
            course_title="Immunity and Immunization", course_code="CHE 224", credit=2
        )
        course6 = Course(
            course_title="Control of Communicable Diseases",
            course_code="CHE 225",
            credit=2,
        )
        course7 = Course(
            course_title="Accident and Emergency", course_code="CHE 226", credit=2
        )
        course8 = Course(
            course_title="Supervised Clinical Experience I",
            course_code="CHE 227",
            credit=3,
        )
        course9 = Course(
            course_title="Communication in English", course_code="GNS 102", credit=2
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

    # Community Health Extention 200 first semester

    if (
        department_name == "Community Health Extention"
        and department_level == 200
        and semester_name == "first"
    ):
        course1 = Course(
            course_title="Anatomy and Physiolology II", course_code="CHE 231", credit=2
        )
        course2 = Course(course_title="Oral Health", course_code="CHE 232", credit=2)
        course3 = Course(
            course_title="Community Mental Health", course_code="CHE 233", credit=2
        )
        course4 = Course(
            course_title="Reproductive Health", course_code="CHE 234", credit=2
        )
        course5 = Course(course_title="Child Health", course_code="CHE 235", credit=3)
        course6 = Course(
            course_title="School Health Programme", course_code="CHE 236", credit=2
        )
        course7 = Course(
            course_title="Control of Non-Communicable Disease",
            course_code="CHE 237",
            credit=2,
        )
        course8 = Course(
            course_title="Intro to Physical Chemistry", course_code="BCH 111", credit=1
        )
        course9 = Course(
            course_title="Community linkage and Development",
            course_code="CHE 238",
            credit=3,
        )
        course10 = Course(
            course_title="Care and Management of HIV and AIDS",
            course_code="CHE 239",
            credit=2,
        )
        course11 = Course(
            course_title="Occupational Health and Safety",
            course_code="CHE 240",
            credit=2,
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
                course10,
                course11,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
                course10,
                course11,
            ]
        )

    # Community Health Extention 200 second semester
    if (
        department_name == "Community Health Extention"
        and department_level == 200
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Clinical Skills II", course_code="CHE 241", credit=3
        )
        course2 = Course(
            course_title="Maternal Health", course_code="CHE 242", credit=4
        )
        course3 = Course(
            course_title="Modified Essential Newborn Care",
            course_code="CHE 243",
            credit=3,
        )
        course4 = Course(
            course_title="Community Ear Nose and Throat Care(ENT)",
            course_code="CHE 244",
            credit=2,
        )
        course5 = Course(
            course_title="Community Eye Care", course_code="CHE 245", credit=1
        )
        course6 = Course(
            course_title="Use of Standing Orders", course_code="CHE 246", credit=3
        )
        course7 = Course(
            course_title="Intro to Pharmacology", course_code="GNP 123", credit=2
        )
        course8 = Course(
            course_title="Nigerian Health System", course_code="CHE 247", credit=2
        )
        course9 = Course(
            course_title="Supervised Clinical Experience II",
            course_code="CHE 248",
            credit=4,
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

    # Community Health Extention 300 first semester

    if (
        department_name == "Community Health Extention"
        and department_level == 300
        and semester_name == "first"
    ):
        course1 = Course(
            course_title="Care of the Older Persons", course_code="CHE 251", credit=1
        )
        course2 = Course(
            course_title="Care of Persons with Special Needs",
            course_code="CHE 252",
            credit=2,
        )
        course3 = Course(
            course_title="Health Statistics", course_code="CHE 253", credit=2
        )
        course4 = Course(
            course_title="Essential Medicines", course_code="CHE 254", credit=2
        )
        course5 = Course(
            course_title="Human Resource for Health", course_code="CHE 255", credit=1
        )
        course6 = Course(
            course_title="Research Methodology", course_code="CHE 256", credit=2
        )
        course7 = Course(
            course_title="Community Based Newborn Care", course_code="CHE 257", credit=2
        )
        course8 = Course(
            course_title="Supervised Community Based Experience(SCBE)",
            course_code="CHE 258",
            credit=4,
        )

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7, course8]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7, course8]
        )

    # Community Health Extention 300 second semester
    if (
        department_name == "Community Health Extention"
        and department_level == 300
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Primary Health Care Management",
            course_code="CHE 261",
            credit=2,
        )
        course2 = Course(
            course_title="Referral System and Outreach services",
            course_code="CHE 262",
            credit=2,
        )
        course3 = Course(
            course_title="Accounting System in Primary Health Care",
            course_code="CHE 263",
            credit=2,
        )
        course4 = Course(
            course_title="Health Management Information System",
            course_code="CHE 264",
            credit=2,
        )
        course5 = Course(
            course_title="Entrepreneurship Education", course_code="BUS 213", credit=6
        )
        course6 = Course(
            course_title="Research Project", course_code="CHE 265", credit=3
        )

        # Add courses to the database session
        db.session.add_all([course1, course2, course3, course4, course5, course6])

        # Assign the courses to the new user
        user.courses.extend([course1, course2, course3, course4, course5, course6])

    # medical Laboratory Technician 100 first semester
    if (
        department_name == "medical laboratory technician"
        and department_level == 100
        and semester_name == "first"
    ):
        course1 = Course(
            course_title="Communication Skills I", course_code="ELS 101", credit=2
        )
        course2 = Course(
            course_title="Introduction to IT I", course_code="CSC 101", credit=2
        )
        course3 = Course(
            course_title="General Chemistry", course_code="CHM 101", credit=3
        )
        course4 = Course(
            course_title="General Biology I", course_code="BIO 101", credit=3
        )
        course5 = Course(
            course_title="General Physics I", course_code="PHY 101", credit=3
        )
        course6 = Course(
            course_title="General Mathematics I", course_code="MTH 101", credit=2
        )
        course7 = Course(
            course_title="Citizenship Education", course_code="GST 101", credit=2
        )
        course8 = Course(
            course_title="History and Philosophy of Science",
            course_code="GST 103",
            credit=2,
        )
        course9 = Course(
            course_title="Intro to Environmental Health",
            course_code="EHT 101",
            credit=2,
        )
        course10 = Course(
            course_title="Functional French I", course_code="FRN 101", credit=2
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
                course10,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
                course10,
            ]
        )

    # medical Laboratory Technician 100 second semester
    if (
        department_name == "medical laboratory technician"
        and department_level == 100
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Communication Skills II", course_code="ELS 102", credit=2
        )
        course2 = Course(
            course_title="Introduction to IT II", course_code="CSC 102", credit=2
        )
        course3 = Course(
            course_title="Organic Chemistry", course_code="CHM 102", credit=3
        )
        course4 = Course(
            course_title="General Biology II", course_code="BIO 102", credit=3
        )
        course5 = Course(
            course_title="General Physics II", course_code="PHY 102", credit=3
        )
        course6 = Course(
            course_title="General Mathematics II", course_code="MTH 102", credit=2
        )
        course7 = Course(
            course_title="First Aid and Primary Healthcare",
            course_code="FAP 102",
            credit=2,
        )
        course8 = Course(
            course_title="Philosophy & Logic/Critical Reasoning",
            course_code="GST 102",
            credit=2,
        )
        course9 = Course(
            course_title="Functional French II", course_code="FRN 102", credit=2
        )

        # Add courses to the database session
        db.session.add_all(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [
                course1,
                course2,
                course3,
                course4,
                course5,
                course6,
                course7,
                course8,
                course9,
            ]
        )

    # medical Laboratory Technician 200 first semester
    if (
        department_name == "medical laboratory technician"
        and department_level == 200
        and semester_name == "first"
    ):
        course1 = Course(course_title="Basic Anatomy", course_code="ANA 201", credit=3)
        course2 = Course(
            course_title="Basic Physiology", course_code="PHS 201", credit=3
        )
        course3 = Course(
            course_title="Basic Biochemistry", course_code="BCH 201", credit=3
        )
        course4 = Course(course_title="Intro to MLS", course_code="MLT 201", credit=3)
        course5 = Course(
            course_title="Intro to Immunology", course_code="MLT 203", credit=2
        )
        course6 = Course(
            course_title="Clinical Laboratory Posting I",
            course_code="MLT 205",
            credit=3,
        )
        course7 = Course(
            course_title="Basic Laboratory Techniques I",
            course_code="MLT 207",
            credit=2,
        )
        course8 = Course(
            course_title="Basic Cytology and Genetics", course_code="BIO 201", credit=2
        )

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7, course8]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7, course8]
        )

    # medical Laboratory Technician 200 second semester
    if (
        department_name == "medical laboratory technician"
        and department_level == 200
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Medical Microbiology I", course_code="MLT 202", credit=3
        )
        course2 = Course(course_title="Haematology I", course_code="MLT 204", credit=3)
        course3 = Course(
            course_title="Research Methodology", course_code="MLT 210", credit=2
        )
        course4 = Course(
            course_title="Intro to Management, lab organization & ethics",
            course_code="MLT 212",
            credit=2,
        )
        course5 = Course(
            course_title="Clinical Laboratory Posting II",
            course_code="MLT 214",
            credit=3,
        )
        course6 = Course(
            course_title="Basic Laboratory Techniques II",
            course_code="MLT 216",
            credit=2,
        )
        course7 = Course(
            course_title="Histopathology I", course_code="MLT 208", credit=3
        )
        course8 = Course(
            course_title="Clinical Chemistry", course_code="MLT 206", credit=3
        )

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7, course8]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7, course8]
        )

    # medical Laboratory Technician 300 first semester
    if (
        department_name == "medical laboratory technician"
        and department_level == 300
        and semester_name == "first"
    ):
        course1 = Course(
            course_title="Medical Parasitology", course_code="MLT 301", credit=3
        )
        course2 = Course(
            course_title="Blood Transfusion Science", course_code="MLT 303", credit=3
        )
        course3 = Course(
            course_title="Clinical Chemistry II", course_code="MLT 305", credit=3
        )
        course4 = Course(
            course_title="Histopathology II", course_code="MLT 307", credit=3
        )
        course5 = Course(
            course_title="Seminar in Laboratory Posting III",
            course_code="MLT 311",
            credit=3,
        )
        course6 = Course(
            course_title="Seminar in Laboratory Science",
            course_code="MLT 309",
            credit=3,
        )
        course7 = Course(
            course_title="Introductory Virology", course_code="MLT 313", credit=2
        )

        # Add courses to the database session
        db.session.add_all(
            [course1, course2, course3, course4, course5, course6, course7]
        )

        # Assign the courses to the new user
        user.courses.extend(
            [course1, course2, course3, course4, course5, course6, course7]
        )

    # medical Laboratory Technician 300 Second semester
    if (
        department_name == "medical laboratory technician"
        and department_level == 300
        and semester_name == "second"
    ):
        course1 = Course(
            course_title="Medical Microbiology II", course_code="MLT 302", credit=3
        )
        course2 = Course(course_title="Haematology II", course_code="MLT 304", credit=3)
        course3 = Course(
            course_title="Clinical Chemistry III", course_code="MLT 306", credit=2
        )
        course4 = Course(
            course_title="Histopathology III", course_code="MLT 308", credit=2
        )
        course5 = Course(
            course_title="Research Project", course_code="MLT 312", credit=6
        )
        course6 = Course(
            course_title="Good Laboratory Practice", course_code="MLT 310", credit=2
        )

        # Add courses to the database session
        db.session.add_all([course1, course2, course3, course4, course5, course6])

        # Assign the courses to the new user
        user.courses.extend([course1, course2, course3, course4, course5, course6])
        
        db.session.commit()
