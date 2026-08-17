import { useNavigate } from "react-router-dom";

export function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <section>
      <div>
        <h1>Welcome to LawnPulse 🌱</h1>
        <p>Your complete property maintenance and lawn care planning hub.</p>
      </div>

      <div>
        <div>
          <h3>Property Summary</h3>
          <p>
            <strong>Location:</strong> Main Lawn & Backyard Garden
          </p>
          <p>
            <strong>Grass Type:</strong> Cool-season Blend
          </p>
          <p>
            <strong>Next Activity:</strong> Fall Overseeding
          </p>
          <button onClick={() => navigate("/planner")}>View Schedule</button>
        </div>

        <div>
          <h3>💡 Seasonal Tip</h3>
          <p>
            <strong>Summer Care:</strong> Water deeply and infrequently in the
            early morning to encourage deep root growth and minimize
            evaporation.
          </p>
        </div>
      </div>
    </section>
  );
}
