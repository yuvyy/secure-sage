from flask import request, jsonify, Blueprint
from db import get_db_connection

add_system_bp = Blueprint('add_system', __name__)

@add_system_bp.route('/add_system', methods=['POST'])
def add_system():
    """
    Creates a new system in the database.
    """
    conn = get_db_connection()
    cur = conn.cursor()

    # Get data from the request body
    data = request.get_json()
    system_name = data.get('system_name')
    system_mac = data.get('system_mac')
    system_ip = data.get('system_ip', None)  # Optional field

    # Insert data into the database
    cur.execute("""
        INSERT INTO Systems (systemname, systemmac, systemip)
        VALUES (%s, %s, %s)
    """, (system_name, system_mac, system_ip))

    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'System created successfully'})