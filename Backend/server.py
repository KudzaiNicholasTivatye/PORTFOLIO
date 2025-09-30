from flask import Flask, request, jsonify
import yagmail
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Yagmail with your Gmail + App Password
yag = yagmail.SMTP("kudziet221@gmail.com", "oqezcrytsprhgtvr")

@app.route("/send-email", methods=["POST"])
def send_email():
    try:
        data = request.json
        receiver = data.get("to")
        subject = data.get("subject")

        # Build the HTML content for the email
        html_content = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {data.get('name', '')}</p>
        <p><strong>Email:</strong> {data.get('email', '')}</p>
        <p><strong>Phone:</strong> {data.get('phone', '')}</p>
        <p><strong>Message:</strong><br>{data.get('message', '')}</p>
        """

        # Send the email with HTML content
        yag.send(
            to=receiver,
            subject=subject,
            contents=html_content
        )

        return jsonify({"status": "success", "message": "Email sent successfully!"})
    
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
