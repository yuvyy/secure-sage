from flask import Blueprint, jsonify
from db import get_db_connection

fetch_audits_bp = Blueprint('fetch_audits', __name__)

@fetch_audits_bp.route('/fetch_audits', methods=['GET'])
def get_categories_and_audits():
    """
    Fetches categories and their corresponding audits from the database.
    Returns the data in the required format.
    """
    conn = get_db_connection()
    cur = conn.cursor()

    # Query to fetch all categories and their corresponding audits
    query = """
    SELECT c.CategoryName, a.AuditName
    FROM Categories c
    LEFT JOIN Audits a ON c.CategoryID = a.CategoryID
    ORDER BY c.CategoryID;
    """
    cur.execute(query)
    rows = cur.fetchall()

    # Close the database connection
    cur.close()
    conn.close()

    # Process the result into the desired format
    result = []
    current_category = None
    current_tests = []

    for row in rows:
        category_name, audit_name = row

        if category_name != current_category:
            if current_category is not None:
                # Append the previous category and its tests
                result.append({
                    "category": current_category,
                    "tests": current_tests
                })
            # Start a new category
            current_category = category_name
            current_tests = []

        if audit_name:
            current_tests.append(audit_name)

    # Append the last category if there was any data
    if current_category:
        result.append({
            "category": current_category,
            "tests": current_tests
        })

    return jsonify(result)