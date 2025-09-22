import React from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "About", icon: <FaUser />, path: "/about" },
    { label: "Projects", icon: <FaFolderOpen />, path: "/projects" },
    { label: "Contact", icon: <FaEnvelope />, path: "/contact" },
  ];

  // find the active index by comparing the current location
  const activeIndex = menuItems.findIndex((item) => item.path === location.pathname);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Pill indicator */}
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
