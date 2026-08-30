import { GardenItem } from "./GardenItem.jsx";

export function GardenList({ items, onDeleteItem, onStartEdit }) {
  if (items.length === 0) {
    return (
      <p className="empty-message">
        No garden items found. Add your first item using the form above!
      </p>
    );
  }

  return (
    <div className="garden-list">
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
