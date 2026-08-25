import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <span className="logo-icon">🌱</span> LawnPulse
        </NavLink>
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsOpen(false)}
          >
            Garden
          </NavLink>
          <span className="nav-link disabled">Planner</span>
          <span className="nav-link disabled">Mowing</span>
          <span className="nav-link disabled">About</span>
        </nav>
      </div>
    </header>
  );
}
