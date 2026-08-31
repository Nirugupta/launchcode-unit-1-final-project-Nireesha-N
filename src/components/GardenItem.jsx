import "./GardenItem.css";
// Reusable card component to display details and actions for a single garden item
export function GardenItem({ item, onDeleteItem, onStartEdit }) {
  return (
    <div className="garden-card">
      {/* Item title and badge category */}
      <h3>{item.name}</h3>
      <span className="card-category">{item.category}</span>
      {/* Location and optional notes */}
      <p className="card-location">Location: {item.location}</p>
      {item.notes && <p className="card-notes">Notes: {item.notes}</p>}
      {/* Action buttons for editing and deleting */}
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onStartEdit(item)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDeleteItem(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
