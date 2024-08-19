def register_blueprints(app):
    from api.v2.controllers.homepage_controller import pages_bp
    from api.v2.controllers.student_controller import user_bp
    import api.v2.views.page_views_route 
    
    app.register_blueprint(pages_bp)
    app.register_blueprint(user_bp, url_prefix="/api/v2")
    
    return register_blueprints