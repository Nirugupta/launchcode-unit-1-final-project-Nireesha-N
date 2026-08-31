import "./About.css";
// About component displaying application background, core features, and project goals
export function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        {/* App title and short summary */}
        <h1>About LawnPulse</h1>
        <p>
          LawnPulse is a simple web application designed to help homeowners and
          gardening enthusiasts track lawn maintenance, log garden inventory,
          and plan seasonal care routines.
        </p>
      </section>
      {/* Explains why the app was built */}
      <section className="about-section">
        <h2>Our Purpose</h2>
        <p>
          Managing a lawn and garden can get overwhelming with different
          schedule needs for mowing, watering, and plant care. LawnPulse keeps
          all your essential details organized in one easy-to-use dashboard.
        </p>
      </section>
      {/* List of main app features */}
      <section className="about-section">
        <h2>Key Features</h2>
        <ul className="about-list">
          <li>
            <strong>Garden Inventory:</strong> Keep track of your plants, tools,
            and supplies with custom filters and details.
          </li>
          <li>
            <strong>Care Planner:</strong> Schedule routines, view weather-based
            mowing recommendations, and access seasonal care tips.
          </li>
        </ul>
      </section>
      {/* Project info and tech details */}
      <section className="about-section">
        <h2>Project Info</h2>
        <p>
          Built as a React application to demonstrate core concepts like
          component structure, state management, and client-side routing.
        </p>
      </section>
    </div>
  );
}
