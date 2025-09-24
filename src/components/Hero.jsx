import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Navbar */}
      <Navbar /> 


      {/* Left Social Icons */}
      
  <div className="social-sidebar">
        <span className="glow-line"></span>
        <a
          href="https://www.linkedin.com/in/kudzai-nicholas-tivatye-00498533a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <span className="glow-line"></span>
        <a
          href="https://github.com/KudzaiNicholasTivatye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <span className="glow-line"></span>
      </div>


        {/* Header Left Section */}
      <div className="header-left">
        <h2 className="welcome-text">Hello, Welcome to My Portfolio</h2>
        <h1 className="hero-name">Kudzai Nicholas Tivatye</h1>
        <p className="hero-tagline">
          Software Developer & Cybersecurity Enthusiast
        </p>
      </div>
       

         {/* Spline iframe as background */}
        <div className="spline-background">
        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-E3wRi2FlzQbwOXhD4GlkDuEy/"
          frameBorder="0"
          width="100%"
          height="90%"
          style={{  position: "absolute", left: "20%" }}
          allowFullScreen
          title="Spline Scene"
          ></iframe>
        </div>

        
      

      
    </div>

    
  );
}
