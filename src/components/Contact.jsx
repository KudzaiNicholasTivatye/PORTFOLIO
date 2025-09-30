import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "02c75905-1fd7-4ed3-bde6-f8ade4eadc15", // 🔹 Replace with your Web3Forms API key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New message from ${formData.name}`,
          // redirect: "https://your-website.com/thank-you", // optional
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Error: " + JSON.stringify(result));
      }
    } catch (error) {
      alert("Error sending message: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      {/* Navbar */}
      <Navbar />

      {/* Left Side */}
      <div className="contact-info">
        <h2>CONTACT</h2>
        <p>
          "I’m always excited to connect, collaborate, and bring ideas to life together. Let’s work on something amazing!"
        </p>

        <div className="info-block">
          <h4>Address</h4>
          <p>54 Barbra Tredgold Circle, Mbare, Harare, Zimbabwe</p>
        </div>

        <div className="info-block">
          <h4>Phone</h4>
          <p>+263 780 518 264</p>
          <p>+263 717 113 870</p>
        </div>

        <div className="info-block">
          <h4>Email</h4>
          <p>kudziet221@gmail.com</p>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/kudzai-nicholas-tivatye-00498533a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/KudzaiNicholasTivatye"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form">
        <h3>GET IN TOUCH</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
