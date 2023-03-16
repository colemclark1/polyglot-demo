
from flask import Blueprint, jsonify, request
from db import users

users_blueprint = Blueprint('users_blueprint', __name__)

# Get all users
@users_blueprint.route('/users', methods = ['GET'])
def get_users():
    return jsonify(users), 200

# Get User By ID
@users_blueprint.route('/users/<int:target_user_id>',methods = ['GET'])
def get_user_by_id(target_user_id):
    
    for user in users:
        if user['id'] == target_user_id:
            return jsonify(user), 200
        
    return jsonify({}), 400


# Add new user
@users_blueprint.route('/users', methods = ['POST'])
def create_user():

    next_id = users[-1]['id'] + 1

    new_user = request.get_json(force=True)
    new_user['id'] = next_id

    users.append(new_user)
    
        
    return jsonify(new_user), 200


# Update User
@users_blueprint.route('/users/<int:user_id>', methods = ['PUT'])
def update_user(user_id):

    user_info = request.get_json(force=True)

    for user in users:
        if user['id'] == user_id:
            user["name"] = user_info['name']
            user["email"] = user_info['email']
            return jsonify(user), 200
    

    return jsonify({}), 400

# def before_blueprint_request():
#     print("Authenticate user before request....")

# users_blueprint.before_request(before_blueprint_request)