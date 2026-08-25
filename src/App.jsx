import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { GardenManager } from "./components/GardenManager.jsx";
import { HomeDashboard } from "./components/HomeDashboard.jsx";
import { CarePlanner } from "./components/CarePlanner.jsx";
import { MowingHelper } from "./components/MowingHelper.jsx";
import { About } from "./components/About.jsx";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/inventory" element={<GardenManager />} />
          <Route path="/planner" element={<CarePlanner />} />
          <Route path="/mowing" element={<MowingHelper />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
