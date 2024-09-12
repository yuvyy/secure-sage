from flask import jsonify, Blueprint
from db import get_db_connection

fetch_systems_bp = Blueprint('fetch_systems',__name__)

@fetch_systems_bp.route('/fetch_systems', methods=['GET'])
def fetch_systems():

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute('''
    SELECT SystemID, SystemName FROM Systems
    ''')
    rows = cur.fetchall()
    cur.close
    conn.close
    result = []

    for row in rows:
        id, name = row
        result.append({
            'system_id': id,
            'system_name': name
        })

    return jsonify(result)