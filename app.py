from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html", title="Home")

# Query parameter route (used by form)
@app.route('/greet/')
def greet_query():
    name = request.args.get('name', 'Guest')
    return render_template("greet.html", name=name, title="Greeting")

# Path parameter route (used by tests)
@app.route('/greet/<name>')
def greet_path(name):
    return render_template("greet.html", name=name, title="Greeting")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

