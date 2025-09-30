import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // 🔹 Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔹 Start loading

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "your_receiver_email@gmail.com",
          subject: `New message from ${formData.name}`,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}

            Message:
            ${formData.message}
          `,
        }),
      });

      const result = await response.json();
      alert(result.message);

      // Reset form after success
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Error sending email: " + error);
    } finally {
      setLoading(false); // 🔹 Stop loading
    }
  };

  return (
    <section className="contact-section">
     
       {/* Navbar*/}
       <Navbar/>


      {/* Left Side */}
      <div className="contact-info">
        <h2>CONTACT</h2>
        <p>
         "I’m always excited to connect, collaborate, and bring ideas to life together. Let’s work on something amazing!"
        </p>

        <div className="info-block">
          <h4>Address</h4>
          <p> 54 Barbra Tredgold Circle, Mbare , Harare, Zimbabwe</p>
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
          <a href="https://www.linkedin.com/in/kudzai-nicholas-tivatye-00498533a" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/KudzaiNicholasTivatye" target="_blank" rel="noreferrer">
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
          {loading ? "Sending..." : "Send Message"} {/* 🔹 Show loading text */}
        </button>
      </form>
    </div>
      
    </section>
  );
};

export default Contact;
