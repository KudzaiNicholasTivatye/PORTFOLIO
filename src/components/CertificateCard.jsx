import React from "react";
import "./CertificateCard.css";
import logo from "../assets/logo.png";
import { FiArrowRight } from "react-icons/fi";

const CertificateCard = () => {
  return (
    <div className="certificate-container">
      {/* Top Join Us Button */}
      

      {/* Main Certificate Section */}
      <div className="certificate-box">
      <img src={logo} alt="Profile" />
      </div>

      {/* Bottom Profile Info */}
      <div className="profile-card">
        <img
          src="/profile.jpg" // replace with your profile picture
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-text">
          <h4>Your Name</h4>
          <p>Certified [Your Field]</p>
        </div>
        
<button
  className="arrow-btn"
  onClick={() =>
    window.open(
      "https://www.linkedin.com/in/kudzai-nicholas-tivatye-00498533a",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  <FiArrowRight />
</button>
      </div>
    </div>
  );
};

export default CertificateCard;
