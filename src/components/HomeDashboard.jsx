import { Link } from "react-router-dom";
import "./HomeDashboard.css";

export function HomeDashboard() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to LawnPulse 🌱</h1>
        <p>Dashboard for lawn maintenance and garden tracking.</p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Garden Items</h3>
          <p className="stat-number">12</p>
        </div>
        <div className="stat-card">
          <h3>Pending Tasks</h3>
          <p className="stat-number">3</p>
        </div>
        <div className="stat-card">
          <h3>Last Mowed</h3>
          <p className="stat-number">3 days ago</p>
        </div>
      </section>

      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/inventory" className="btn-action">
            Manage Garden Inventory
          </Link>
          <Link to="/planner" className="btn-action">
            View Care Planner
          </Link>
          <Link to="/mowing" className="btn-action">
            Log Mowing Session
          </Link>
        </div>
      </section>
    </div>
  );
}
