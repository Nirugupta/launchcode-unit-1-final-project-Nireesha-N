import { useState } from "react";
import "./CarePlanner.css";
// Care planner page showing maintenance tasks, weather advice, and seasonal tips
export function CarePlanner() {
  // State storing schedule list items
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      title: "Watering Routine",
      interval: "Every 24 hours",
      status: "Due Today 💧",
    },
    {
      id: 2,
      title: "Lawn Mowing",
      interval: "Every 2 weeks",
      status: "Scheduled for next week 🚜",
    },
    {
      id: 3,
      title: "Fertilizer Application",
      interval: "Every 3 months",
      status: "Up to date 🌿",
    },
  ]);
  // State storing currently selected weather filter
  const [weatherCondition, setWeatherCondition] = useState("Sunny");
  // Marks a specific routine task as completed
  const handleComplete = (id) => {
    setSchedules(
      schedules.map((item) =>
        item.id === id ? { ...item, status: "Completed! ✅" } : item,
      ),
    );
  };

  return (
    <div className="planner-container">
      <h2>Care Planner & Schedule 🗓️</h2>
      <p>
        Recommended maintenance routines to keep your lawn healthy year-round.
      </p>
      {/* Routine schedule cards list */}
      <div className="schedule-cards">
        {schedules.map((item) => (
          <div key={item.id} className="schedule-card">
            <h3>{item.title}</h3>
            <p className="interval">
              <strong>Frequency:</strong> {item.interval}
            </p>
            <p className="status">
              <strong>Status:</strong> {item.status}
            </p>
            <button onClick={() => handleComplete(item.id)}>
              Mark as Done
            </button>
          </div>
        ))}
      </div>
      {/* Interactive weather selection and advice box */}
      <div className="weather-section">
        <h3>Weather & Mowing Recommendation ☀️</h3>
        <div className="weather-selector">
          <label>Select Current Weather: </label>
          <select
            value={weatherCondition}
            onChange={(e) => setWeatherCondition(e.target.value)}
          >
            <option value="Sunny">Sunny ☀️</option>
            <option value="Rainy">Rainy 🌧️</option>
            <option value="Extreme Heat">Extreme Heat 🔥</option>
          </select>
        </div>
        {/* Conditional recommendation based on weather selection */}
        <div className="recommendation-box">
          {weatherCondition === "Sunny" && (
            <p>
              ✅ <strong>Great day to mow!</strong> Dry conditions ensure a
              clean, sharp cut.
            </p>
          )}
          {weatherCondition === "Rainy" && (
            <p>
              ⚠️ <strong>Skip mowing today.</strong> Mowing wet grass can damage
              the lawn and clump turf.
            </p>
          )}
          {weatherCondition === "Extreme Heat" && (
            <p>
              ⚠️ <strong>Mow in the early morning or evening.</strong> Avoid
              mowing during mid-day heat stress.
            </p>
          )}
        </div>
      </div>
      {/* General seasonal advice list */}
      <div className="seasonal-tips-section">
        <h3>Seasonal Lawn Care Tips 🍂🌱</h3>
        <ul className="tips-list">
          <li>
            <strong>Spring:</strong> Aerate soil and apply pre-emergent weed
            control.
          </li>
          <li>
            <strong>Summer:</strong> Water deeply in the early morning to reduce
            evaporation.
          </li>
          <li>
            <strong>Fall:</strong> Overseed thin areas and apply high-nitrogen
            fertilizer before frost.
          </li>
          <li>
            <strong>Winter:</strong> Keep lawn free of heavy debris and clean
            lawn mower blades.
          </li>
        </ul>
      </div>
    </div>
  );
}
