from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'your_username@gmail.com'
app.config['MAIL_PASSWORD'] = 'your_password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route("/register", methods=["POST"])
def register():

    """    # Validate submission
    if not request.form.get("name") or request.form.get("sport") not in SPORTS:
        return render_template("failure.html")

    # Confirm registration
    return render_template("success.html") """

    # Validate name and email
    name = request.form.get("name")
    email=request.form.get("email")
    if not name or not email:
        return render_template("error.html", message="Missing name")

    # Send email
    message = Message("You are registered!", recipients=[email]) #message function  1.subject line 2.name paramter recipet to get informatin email
    mail.send(message) 

    # Confirm registration
    return redirect("/registrants")

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/contact", methods=["POST"])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message(subject='New Contact Form Submission',
                      sender=app.config.get("MAIL_USERNAME"),
                      recipients=['zaricacarica@gmail.com'])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)
        return 'Message sent!'
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
