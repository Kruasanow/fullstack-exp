from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/', methods = ['POST','GET'])
def index():
    param1 = 'the first'
    param2 = 'the second'
    return render_template('index.html', param1=param1, param2=param2)

if __name__=="__main__":
    app.run(host='0.0.0.0', port=5555, debug=True)