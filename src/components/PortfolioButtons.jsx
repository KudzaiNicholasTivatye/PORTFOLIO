import React from 'react';
import "./Button.css";
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const PortfolioButtons = () => {
  return (
    <div className="button-container">
      {/* Hire Me button - opens email */}
      <Button
        onClick={() => window.location.href = 'mailto:your.email@example.com'}
        icon={<FaEnvelope />}
      >
        Hire Me
      </Button>

      {/* Download CV button - downloads a file */}
      <Button
        onClick={() => window.open('/path/to/your-cv.pdf', '_blank')}
        icon={<FaDownload />}
      >
        Download CV
      </Button>
    </div>
  );
};

export default PortfolioButtons;
