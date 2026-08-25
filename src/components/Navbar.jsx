import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <span className="logo-icon">🌱</span> LawnPulse
        </NavLink>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
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
