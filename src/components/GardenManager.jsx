import { useState, useRef } from "react";
import { GardenForm } from "./GardenForm.jsx";
import { GardenList } from "./GardenList.jsx";
import "./GardenManager.css";

// Parent manager component handling state management, search/category filtering, and CRUD operations
export function GardenManager({ items, setItems }) {
  // Track item selected for edit mode
  const [editingItem, setEditingItem] = useState(null);

  // Controlled form state fields
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Lawn Zone");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  // Search filter and category filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // DOM ref to auto-scroll back to form during edit mode
  const formRef = useRef(null);

  // Resets form state fields back to defaults
  const clearForm = () => {
    setName("");
    setCategory("Lawn Zone");
    setLocation("");
    setNotes("");
    setEditingItem(null);
  };

  // Populates form fields with existing item data for editing
  const handleStartEdit = (item) => {
    setEditingItem(item);
    setName(item.name);
    setCategory(item.category);
    setLocation(item.location);
    setNotes(item.notes || "");

    // Smooth scroll to form element
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Cancels active edit operation and clears form inputs
  const handleCancelEdit = () => {
    clearForm();
  };

  // Handles adding new items or updating existing items in parent state
  const handleSaveItem = () => {
    if (editingItem) {
      // Update existing item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItem.id
            ? { ...item, name, category, location, notes }
            : item,
        ),
      );
    } else {
      // Create new item entry
      const newItem = {
        id: Date.now(),
        name,
        category,
        location,
        notes,
      };
      setItems((prevItems) => [...prevItems, newItem]);
    }

    clearForm();
  };

  // Deletes an item from state by ID and resets form if currently editing it
  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (editingItem && editingItem.id === id) {
      clearForm();
    }
  };

  // Filters items list dynamically based on search string and category drop-down
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="inventory-section">
      <h2>Garden & Property Inventory</h2>

      <div className="inventory-layout">
        {/* Form container referenced for smooth scrolling */}
        <div ref={formRef}>
          <GardenForm
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            location={location}
            setLocation={setLocation}
            notes={notes}
            setNotes={setNotes}
            editingItem={editingItem}
            onSaveItem={handleSaveItem}
            onCancelEdit={handleCancelEdit}
          />
        </div>

        <div>
          {/* Search and Category Filtering Section */}
          <div className="filter-box">
            <h3>Filter Inventory</h3>
            <div className="filter-group">
              <label>Search: </label>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label>Category: </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Lawn Zone">Lawn Zone</option>
                <option value="Plant / Flower">Plant / Flower</option>
                <option value="Tree / Shrub">Tree / Shrub</option>
                <option value="Supply / Chemical">Supply / Chemical</option>
              </select>
            </div>
          </div>

          {/* Dynamic Item Count and Item List display */}
          <h3>Your Items ({filteredItems.length})</h3>
          <GardenList
            items={filteredItems}
            onDeleteItem={handleDeleteItem}
            onStartEdit={handleStartEdit}
          />
        </div>
      </div>
    </section>
  );
}
