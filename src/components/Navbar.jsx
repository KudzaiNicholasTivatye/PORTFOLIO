import React, { useState } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Navbar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "About", icon: <FaUser />, path: "/about" },
    { label: "Projects", icon: <FaFolderOpen />, path: "/projects" },
    { label: "Contact", icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* moving background indicator */}
        <div
          className="nav-indicator"
          style={{
            left: `${(100 / menuItems.length) * activeIndex}%`,
            width: `${100 / menuItems.length}%`,
          }}
        />
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Link to={item.path} className="nav-link">
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
