from flask import Flask, request, jsonify, Blueprint
from db import get_db_connection

create_group_bp = Blueprint('create_group', __name__)

@create_group_bp.route('/create_group', methods=['POST'])
def create_group():
    """
    Creates a new group in the database.
    """
    conn = get_db_connection()
    cur = conn.cursor()

    # Get data from the request body
    data = request.get_json()
    group_name = data['group_name']
    systems = data['systems_id']


    # Insert data into the database
    cur.execute("""
        INSERT INTO Groups (GroupName)
        VALUES (%s) RETURNING GroupID
    """, (group_name,))
    group_id = cur.fetchone()[0]

    for system in systems:
        cur.execute("""
            INSERT INTO GroupSystems (GroupID, SystemID)
            VALUES (%s, %s)
        """, ( group_id,system))

    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'Group created successfully'})