from flask import Blueprint, jsonify, request
from fabric import Connection
from modules.csv_filter import filter_csv_by_names
from datetime import datetime
from db import get_db_connection

perform_test_bp = Blueprint('perform_test', __name__)

def sshexecute(data,ip):

    ps1_script = '../remotefiles/check.ps1'
    check_csv = '../remotefiles/checks.csv'
    username = "SSHuser"
    password = "pass123"

    conn = Connection(
        host=ip,
        user=username,
        connect_kwargs={
            "password": password,
        },
    )

    names = []
    for value in data.values():
        if isinstance(value, list):
            names.extend(value)

    filter_csv_by_names(names)

    conn.put(ps1_script, remote=ps1_script)
    conn.put(check_csv, remote=check_csv)
    result = conn.run(f'powershell -ExecutionPolicy Bypass -File {ps1_script}', hide=True)

    current_timestamp = datetime.now()
    formatted_timestamp = current_timestamp.strftime("%Y-%m-%d-%H-%M-%S")
    file_path = '../output/{}.json'.format(formatted_timestamp)
    conn.get('output.json', file_path)

    return "Test conducted succesfully, output stored"

@perform_test_bp.route('/perform_test', methods=['POST'])
def perform_test():
    data = request.get_json()
    print(data)  # Corrected to print the entire data object
    if (data.get("selectedSystems") != []):
        for system in data.get("selectedSystems"):
            # Later add function to fetch ip address from mac address
            con = get_db_connection()
            cur = con.cursor()
            cur.execute('''
            SELECT systemip FROM Systems WHERE systemid = %s
            ''', (system,))
            system_ip = cur.fetchone()[0]

    sshexecute(data.get("testDetails"),system_ip)
    return jsonify({'message': 'Array received successfully'})