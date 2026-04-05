function TaskItem({ task, onDelete }) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '8px', 
      borderBottom: '1px solid #ddd' 
    }}>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;