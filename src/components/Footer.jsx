import "./Footer.css";

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} LawnPulse. All rights reserved.</p>
        <p className="footer-tagline">Smart Lawn & Garden Management</p>
      </div>
    </footer>
  );
}
