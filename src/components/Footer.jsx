import "./Footer.css";
// Footer component showing copyright and app tagline
export function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        {/* Displays current year automatically */}
        <p>© {new Date().getFullYear()} LawnPulse. All rights reserved.</p>
        {/* Short app tagline */}
        <p className="footer-tagline">Smart Lawn & Garden Management</p>
      </div>
    </footer>
  );
}
