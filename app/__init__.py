import pkg_resources
from os.path import abspath, dirname, join

from flask import Flask, render_template, send_from_directory
from flask_webpack import Webpack

__version__ = pkg_resources.require('TmpMail')[0].version
here = abspath(dirname(__file__))

app = Flask(__name__)

webpack = Webpack()
app.config['WEBPACK_MANIFEST_PATH'] = join(here, 'manifest.json')
webpack.init_app(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/assets/<path:filename>')
def send_asset(filename):
    return send_from_directory(join(here,'public'), filename)

if __name__ == '__main__':
    app.debug = True
    app.run(extra_files=[app.config['WEBPACK_MANIFEST_PATH']])