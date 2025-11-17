from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess, tempfile

app = Flask(__name__)
CORS(app)

@app.post('/run')
def run():
    data = request.get_json()
    code = data.get('code', '')
    with tempfile.NamedTemporaryFile(delete=False, suffix='.py') as tmp:
        tmp.write(code.encode())
        tmp_path = tmp.name

    try:
        result = subprocess.run(["python3", tmp_path], capture_output=True, text=True, timeout=5)
        output = result.stdout + result.stderr
    except Exception as e:
        output = str(e)

    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
