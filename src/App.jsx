import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { initialGardenItems } from "./testdata/mockLawnData.js";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { GardenManager } from "./components/GardenManager.jsx";
import { HomeDashboard } from "./components/HomeDashboard.jsx";
import { CarePlanner } from "./components/CarePlanner.jsx";
import { About } from "./components/About.jsx";
import "./App.css";

export default function App() {
  const [items, setItems] = useState(initialGardenItems);

  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomeDashboard inventoryCount={items.length} />}
          />
          <Route
            path="/inventory"
            element={<GardenManager items={items} setItems={setItems} />}
          />
          <Route path="/planner" element={<CarePlanner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
