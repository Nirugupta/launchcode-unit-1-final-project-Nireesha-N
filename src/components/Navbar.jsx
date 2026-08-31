import { NavLink } from "react-router-dom";
import "./Navbar.css";
// Header navigation component displaying Appname with logo and active routing links
export function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand logo link routing to home dashboard */}
        <NavLink to="/" className="navbar-brand">
          <span role="img" className="logo-icon">
            🌱
          </span>{" "}
          LawnPulse
        </NavLink>
        {/* Dynamic navigation links with active state highlighting */}
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
          <NavLink
            to="/planner"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Planner
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
