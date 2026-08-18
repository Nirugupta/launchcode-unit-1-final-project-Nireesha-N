import { useState } from "react";
import { initialGardenItems } from "../testdata/mockLawnData.js";
import { GardenForm } from "./GardenForm.jsx";
import { GardenList } from "./GardenList.jsx";

export function GardenManager() {
  const [items, setItems] = useState(initialGardenItems);

  const [editingItem, setEditingItem] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Lawn Zone");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const clearForm = () => {
    setName("");
    setCategory("Lawn Zone");
    setLocation("");
    setNotes("");
    setEditingItem(null);
  };

  const handleStartEdit = (item) => {
    setEditingItem(item);
    setName(item.name);
    setCategory(item.category);
    setLocation(item.location);
    setNotes(item.notes || "");
  };

  const handleCancelEdit = () => {
    clearForm();
  };

  const handleSaveItem = () => {
    if (editingItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItem.id
            ? { ...item, name, category, location, notes }
            : item,
        ),
      );
    } else {
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

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (editingItem && editingItem.id === id) {
      clearForm();
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h2>Garden & Property Inventory</h2>

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

      <hr />

      <div>
        <h3>Filter Inventory</h3>
        <div>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
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

      <h3>Your Items ({filteredItems.length})</h3>
      <GardenList
        items={filteredItems}
        onDeleteItem={handleDeleteItem}
        onStartEdit={handleStartEdit}
      />
    </section>
  );
}
