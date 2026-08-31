import { GardenItem } from "./GardenItem.jsx";

// Container component that renders a list of GardenItem components or an empty message
export function GardenList({ items, onDeleteItem, onStartEdit }) {
  // Return empty placeholder message if no items exist
  if (items.length === 0) {
    return (
      <p className="empty-message">
        No garden items found. Add your first item using the form above!
      </p>
    );
  }

  return (
    <div className="garden-list">
      {/* Map through items array and render individual GardenItem cards */}
      {items.map((item) => (
        <GardenItem
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onStartEdit={onStartEdit}
        />
      ))}
    </div>
  );
}
