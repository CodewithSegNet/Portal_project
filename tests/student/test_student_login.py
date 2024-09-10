import pytest
import os
import sys
import json
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))
from unittest.mock import patch, MagicMock
from app import create_app, db
from api.v2.models import Student
from api.v2.controllers.student_controller import StudentLogin



@pytest.fixture(scope='module')
def test_client():
    """
    Setting up env for test.
    """
    app = create_app()
    with app.test_client() as testing_client:
        with app.app_context():
            db.create_all()
            
            # Create test student
            test_student = Student(
                admission_number='SEBW/58/2029', 
                password='hash_password', 
                department_name='Pharmacy Technician'
            )
            db.session.add(test_student)
            db.session.commit()
            yield testing_client
            db.drop_all()
            


def test_login_success(test_client):
    # Mock the database query and JWT encoding
    with patch('api.v2.controllers.student_controller.jwt.encode') as mock_jwt_encode:
        with patch('api.v2.models.Student.query.filter_by') as mock_query:
            with patch('api.v2.controllers.student_controller.check_password_hash') as mock_check_password:
                # Configure the mock
                mock_user = MagicMock()
                mock_user.admission_number = 'SEBW/58/2029'
                mock_user.password = 'hashed_password'
                mock_query.return_value.first.return_value = mock_user
                mock_jwt_encode.return_value = 'mocked_token'
                
                # Debugging: Print to check values
                print("Sending data:", {
                    'admission_number': 'SEBW/58/2029',
                    'password': 'hashed_password'
                })
                
                

                response = test_client.post('/api/v2/students/login', data=json.dumps({
                    'admission_number': 'SEBW/58/2029',
                    'password': 'hashed_password'
                }), content_type='application/json')
                
            
                
                print("Response status:", response.status_code)
                print("Response data:", response.data)

                assert response.status_code == 200
               

                