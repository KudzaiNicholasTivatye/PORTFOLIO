import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Contact.css";

const Contact = () => {
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
