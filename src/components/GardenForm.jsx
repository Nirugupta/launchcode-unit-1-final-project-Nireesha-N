import { useState } from "react";
import "./GardenForm.css";
// Form component for adding or editing a garden item
export function GardenForm({
  name,
  setName,
  category,
  setCategory,
  location,
  setLocation,
  notes,
  setNotes,
  editingItem,
  onSaveItem,
  onCancelEdit,
}) {
  // Local state to manage validation error message
  const [error, setError] = useState("");
  // Validates user input and submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check required fields before saving
    if (name.trim() === "" || location.trim() === "") {
      setError("Please provide both an item name and location.");
      return;
    }

    onSaveItem();
    setError("");
  };

  return (
    <form className="garden-form" onSubmit={handleSubmit}>
      {/* Dynamic header depending on edit mode */}
      <h3>{editingItem ? "Edit Garden Item" : "Add New Garden Item"}</h3>
      {/* Error notification display */}
      {error && <p className="error-message">{error}</p>}
      {/* Item Name input */}
      <div className="form-field">
        <label>Item Name: </label>
        <input
          type="text"
          placeholder="e.g. Front Lawn or Hydrangea Bush"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* Category selection dropdown */}
      <div className="form-field">
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Lawn Zone">Lawn Zone</option>
          <option value="Plant / Flower">Plant / Flower</option>
          <option value="Tree / Shrub">Tree / Shrub</option>
          <option value="Supply / Chemical">Supply / Chemical</option>
        </select>
      </div>
      {/* Location / Zone input */}
      <div className="form-field">
        <label>Location / Zone: </label>
        <input
          type="text"
          placeholder="e.g. Front Yard or Backyard Patio"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {/* Notes input */}
      <div className="form-field">
        <label>Notes: </label>
        <input
          type="text"
          placeholder="e.g. Full sun, watered twice weekly"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      {/* Form submit and optional cancel buttons */}
      <div className="form-actions">
        <button className="btn-submit" type="submit">
          {editingItem ? "Update Item" : "Add Item"}
        </button>
        {editingItem && (
          <button className="btn-cancel" type="button" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
