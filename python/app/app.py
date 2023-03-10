from flask import Flask, jsonify, request

app = Flask(__name__)

from db import users


@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

# Get all users
@app.route('/users',methods = ['GET'])
def get_users():
    return jsonify(users), 200

# Get User By ID
@app.route('/users/<int:target_user_id>',methods = ['GET'])
def get_user_by_id(target_user_id):
    
    for user in users:
        if user['id'] == target_user_id:
            return jsonify(user), 200
        
    return jsonify({}), 400


# Add new user
@app.route('/users',methods = ['POST'])
def create_user():

    next_id = users[-1]['id'] + 1

    new_user = request.get_json(force=True)
    new_user['id'] = next_id

    users.append(new_user)
    
        
    return jsonify(new_user), 200


# Update User
@app.route('/users/<int:user_id>',methods = ['PUT'])
def update_user(user_id):

    user_info = request.get_json(force=True)

    for user in users:
        if user['id'] == user_id:
            user["name"] = user_info['name']
            user["email"] = user_info['email']
            return jsonify(user), 200
    

    return jsonify({}), 400


if __name__ == "__main__":
    app.run()