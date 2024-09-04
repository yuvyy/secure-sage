import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes and origins
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
    return "Hello world"

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/receive_array', methods=['POST'])
def receive_array():
    data = request.get_json()
    print(data)  # Corrected to print the entire data object
    return jsonify({'message': 'Array received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
