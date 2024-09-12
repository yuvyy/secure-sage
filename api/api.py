from flask import Flask
from routes.fetch_audits import fetch_audits_bp
from routes.perform_test import perform_test_bp
from routes.add_system import add_system_bp
from routes.create_group import create_group_bp
from routes.fetch_systems import fetch_systems_bp
from dotenv import load_dotenv
from flask_cors import CORS
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

# Register Blueprints
blueprints = [fetch_audits_bp, perform_test_bp, add_system_bp, create_group_bp, fetch_systems_bp]

for blueprint in blueprints:
    app.register_blueprint(blueprint)

if __name__ == '__main__':
    app.run()
