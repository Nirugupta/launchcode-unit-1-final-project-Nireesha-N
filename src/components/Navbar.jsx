import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">LawnPulse 🌱</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/garden">Garden</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/mowing">Mowing</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
