function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '8px', 
      borderBottom: '1px solid #ddd' 
    }}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => onEdit(task)} style={{ marginRight: '5px', color: '#4a90e2', border: 'none', background: 'none', cursor: 'pointer' }}>Edit</button>
        <button onClick={() => onDelete(task.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Delete</button>
      </div>
    </div>
  );
}