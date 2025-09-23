import React, { useState } from "react";
import "./CertificateCard.css";
import { FiArrowRight, FiX } from "react-icons/fi";

const CertificateCard = ({ image, name, title, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="certificate-container">
        {/* Main Certificate Section */}
        <div className="certificate-box" onClick={() => setIsOpen(true)}>
          <img src={image} alt="Certificate" className="certificate-img" />
        </div>

        {/* Bottom Profile Info */}
        <div className="profile-card">
          <img
            src="/profile.jpg" // replace with your profile picture
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-text">
            <h4>{name}</h4>
            <p>{title}</p>
          </div>

          <button
            className="arrow-btn"
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="certificate-modal" onClick={() => setIsOpen(false)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FiX />
            </button>
            <img src={image} alt="Certificate Full View" className="certificate-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
