export function GardenItem({ item, onDeleteItem, onStartEdit }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Location: {item.location}</p>
      {item.notes && <p>Notes: {item.notes}</p>}

      <button onClick={() => onStartEdit(item)}>Edit</button>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </div>
  );
}
