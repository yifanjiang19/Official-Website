import os
from flask import Flask, render_template, session, redirect, url_for, flash ,make_response
from flask.ext.script import Manager, Shell
from flask.ext.bootstrap import Bootstrap
from flask.ext.moment import Moment
import json
from flask.ext.sqlalchemy import SQLAlchemy
from flask import request
from flask.ext.migrate import Migrate ,MigrateCommand
from flask.json import jsonify
from flask.ext.restful import Api,Resource,reqparse
import cap_test2


basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

manager = Manager(app)
bootstrap = Bootstrap(app)
moment = Moment(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)
api =Api(app)


#api
class INFO(Resource):
    def post(self):
        json_1 = json.loads(request.data)
        text_1 = json_1['text']
        if session.get('text') == text_1.upper():
            asd = Information(name = json_1['name'],
                          gender = json_1['gender'],
                          dorm = json_1['dorm'],
                          phone = json_1['phone'],
                          phone_2 = json_1['phone_2'],
                          info = json_1['info'],
                          group = json_1['group'],
                          intro = json_1['intro'],
                       )
            db.session.add(asd)
            db.session.commit()
            return jsonify(status=True)
        else:
            return jsonify(status=False)
class INFO_PC(Resource):
    def post(self):
        if session.get('text') == request.form.get('text').upper():
            asd = Information(name=request.form.get("name"),
                          gender=request.form.get("gender"),
                          dorm=request.form.get("dorm"),
                          phone=request.form.get("phone"),
                          phone_2=request.form.get("phone_2"),
                          info=request.form.get("info"),
                          group=request.form.get("group"),
                          intro=request.form.get("intro"),
                          )
            db.session.add(asd)
            db.session.commit()
            return jsonify(status=True)
        else:
            return jsonify(status=False)
api.add_resource(INFO,'/info')
api.add_resource(INFO_PC,'/info_pc')
#Model

class Information(db.Model):
    __tablename__ = 'informations'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(64),index=True)
    gender = db.Column(db.Integer)
    dorm = db.Column(db.String(64))
    info = db.Column(db.String(64))
    phone = db.Column(db.Integer)
    phone_2 = db.Column(db.Integer)
    group = db.Column(db.Integer)
    intro = db.Column(db.String(128))

class IP(db.Model):
    __tablename__ = 'user_ip'
    id = db.Column(db.Integer,primary_key=True)
    ip = db.Column(db.String(32))
    submit_time= db.Column(db.Integer)



#Error
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

#Route
@app.route('/', methods=['GET', 'POST'])
def mobile():
    j = request.headers['User-Agent']
    if j.find('Mobile') == -1:
        return redirect('/pc')
    else:
        return render_template('app.html')

@app.route('/pc', methods=['GET', 'POST'])
def pc():
    return render_template('app_pc.html')


@app.route('/pil')
def pil():
    text,img_data = cap_test2.create()
    session['text']=text.upper()
    response = make_response(img_data)
    response.headers['Content-Type'] = 'image/jpeg'
    return response



def make_shell_context():
    return dict(app=app,db=db,User=User,Role=Role)
manager.add_command("shell",Shell(make_context=make_shell_context))
manager.add_command('db',MigrateCommand)



if __name__ == '__main__':
    manager.run()
