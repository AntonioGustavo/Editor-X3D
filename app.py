import os
from flask import Flask,render_template, request,json, redirect, url_for
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://ant:123@localhost/flask_form'
SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_TRACK_MODIFICATIONS = True
db = SQLAlchemy(app)


class Forms(db.Model):
    shape_id = db.Column(db.Integer, primary_key=True)
    shape = db.Column(db.String(120))

    def __init__(self, shape):
        self.shape = shape
    
    def __repr__(self):
        return  "%r" % self.shape


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/post_add', methods=['POST'])
def post_add():
    param = Forms(request.form['add'])
    db.session.add(param)
    db.session.commit()
    return ('OK')
    


@app.route('/post_shape' , methods=['POST'])
def post_shape():
    pesq = request.form['pesquisar']; 
    result = Forms.query.filter(Forms.shape_id == str(pesq)).first()
    return str(result)

app.run(debug=True, use_reloader=True)