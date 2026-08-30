import "./GardenItem.css";

export function GardenItem({ item, onDeleteItem, onStartEdit }) {
  return (
    <div className="garden-card">
      <h3>{item.name}</h3>
      <span className="card-category">{item.category}</span>
      <p className="card-location">Location: {item.location}</p>
      {item.notes && <p className="card-notes">Notes: {item.notes}</p>}

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
