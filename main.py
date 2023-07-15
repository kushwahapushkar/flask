from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)


# 1. creating Flask application
# 2. creating .pkl file of our Model
# 3. adding respective functionalities of buttons/ creating api's 
