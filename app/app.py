from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', js='app_js.js', css = 'main_css.js')

@app.route('/asset/<path:path>')
def asset(path):
    if '..' in path:
        return "Page not found", 404
    return send_file('public/' + path)

if __name__ == '__main__':
    app.run()