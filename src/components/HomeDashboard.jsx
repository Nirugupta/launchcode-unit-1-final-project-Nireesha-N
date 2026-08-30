import { Link } from "react-router-dom";
import "./HomeDashboard.css";

export function HomeDashboard({ inventoryCount = 0 }) {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to LawnPulse 🌱</h1>
        <p>Dashboard for lawn maintenance and garden tracking.</p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Garden Items</h3>
          <p className="stat-number">{inventoryCount}</p>
        </div>

        <div className="stat-card">
          <h3>Care Status</h3>
          <p className="stat-number">On Track</p>
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
        </div>
      </section>
    </div>
  );
}
