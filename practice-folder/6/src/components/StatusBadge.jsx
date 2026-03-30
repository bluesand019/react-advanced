import "../App.css"

const StatusBadge = ({ count }) => {
  const isActive = count > 0;
  
  const style = {
    backgroundColor: isActive ? '#4CAF50' : '#f44336',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    display: 'inline-block',
    marginBottom: '10px'
  };

  return (
    <span className="badge" style={style}>
      {isActive ? 'Active User' : 'Inactive'}
    </span>
  );
};

export default StatusBadge;