from flask import Flask, jsonify
from flask_cors import CORS

app = flask(__name__)
CORS(app)


@app.route('/hola')
def saludo():
    return jsonify({
        "mensaje": "saludossss",
        "instancia": "instancia 2"
    })
@app.route('/')
def saludo():
    return jsonify({
        "informacion": "En instancia 2 correctamente ",
    })


if __name__ == '__main__':
    app.run(debug =true,
            host = '0.0.0.0',
            port = 3210)
