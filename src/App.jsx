import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomeDashboard } from "./components/HomeDashboard";

export function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />

          <Route
            path="/garden"
            element={<h2>Garden & Lawn Inventory (Coming Soon)</h2>}
          />
          <Route
            path="/planner"
            element={<h2>Care Planner (Coming Soon)</h2>}
          />
          <Route
            path="/mowing"
            element={<h2>Smart Mowing Helper (Coming Soon)</h2>}
          />
          <Route
            path="/about"
            element={<h2>About LawnPulse (Coming Soon)</h2>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
