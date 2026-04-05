function EditModal({ isOpen, task, onSave, onClose }) {
  if (!isOpen) return null;

  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onSave(task.id, editText);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        width: '300px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
      }}>
        <h3>Edit Task</h3>
        <input 
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          value={editText} 
          onChange={(e) => setEditText(e.target.value)} 
        />
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ border: 'none', background: '#ddd', padding: '5px 10px', borderRadius: '4px' }}>Cancel</button>
          <button onClick={handleSave} style={{ border: 'none', background: '#4a90e2', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}