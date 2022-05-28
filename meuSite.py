from flask import Flask, render_template


app = Flask(__name__)

# @app.route('/')
# def homepage():
#     return render_template('home.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/post')
def post():
    return render_template('post.html')

@app.route('/ranking8profissoesquemaispagamnati')
def post2():
   return render_template('post2.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

if __name__ =='__main__':
    app.run(debug=True)



