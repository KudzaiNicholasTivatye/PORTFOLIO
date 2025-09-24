import React, { useState } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "About", icon: <FaUser />, path: "/about" },
    { label: "Projects", icon: <FaFolderOpen />, path: "/projects" },
    { label: "Contact", icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <nav className="navbar">
      {/* Hamburger for mobile */}
      <button
        className="hamburger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      <ul className={`nav-list${open ? " open" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setOpen(false)} // Close mobile menu on click
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
        {/* Desktop sliding pill indicator */}
        <li className="nav-indicator" />
      </ul>
    </nav>
  );
};

export default Navbar;
