function TaskStats({ totalTasks, onClearAll }) {
  if (totalTasks === 0) return null;

  return (
    <div style={{ 
      marginTop: '20px', 
      paddingTop: '10px', 
      borderTop: '2px solid #333',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.9rem'
    }}>
      <span><strong>Total Tasks:</strong> {totalTasks}</span>
      <button 
        onClick={onClearAll}
        style={{ 
          background: '#ff4d4d', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          padding: '5px 10px',
          cursor: 'pointer' 
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default TaskStats;