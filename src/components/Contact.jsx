import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Left Side */}
      <div className="contact-info">
        <h2>CONTACT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </p>

        <div className="info-block">
          <h4>Address</h4>
          <p>123, Sample Street, Harare, Zimbabwe</p>
        </div>

        <div className="info-block">
          <h4>Phone</h4>
          <p>+263 77 123 4567</p>
        </div>

        <div className="info-block">
          <h4>Email</h4>
          <p>youremail@example.com</p>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form">
        <h3>GET IN TOUCH</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone number" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
