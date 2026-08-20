import { GardenItem } from "./GardenItem.jsx";

export function GardenList({ items, onDeleteItem, onStartEdit }) {
  if (items.length === 0) {
    return (
      <p>No garden items found. Add your first item using the form above!</p>
    );
  }

  return (
    <div>
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
