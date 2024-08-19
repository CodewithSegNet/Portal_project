#!/usr/bin/env python3

def register_blueprints(app):
    from .grade_controller import StudentScoreForm
    from .homepage_controller import pages_bp
    from .student_controller import user_bp
    from .courses_controller import assign_courses
    import api.v2.views.page_views_route 
    
    app.register_blueprint(pages_bp)
    app.register_blueprint(user_bp, url_prefix="/api/v2")