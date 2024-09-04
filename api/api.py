import time
from flask import Flask, request, jsonify
from csv_filter import filter_csv_by_names
from sshexecute import run_test

app = Flask(__name__)




@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/receive_array', methods=['POST'])
def receive_array():
    data = request.get_json()
    test_array = data.get('array')
    print(test_array)

    return jsonify({'message': 'Array received successfully'})