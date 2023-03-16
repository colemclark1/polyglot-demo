from flask import Flask
from users_blueprint import users_blueprint

app = Flask(__name__)
app.register_blueprint(users_blueprint, url_prefix='/api/v1')

@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

if __name__ == "__main__":
    app.run(host='0.0.0.0')