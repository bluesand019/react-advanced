function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: '10px', top: '8px' }}>🔍</span>
        <input
          type="text"
          placeholder="Search your tasks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 10px 10px 35px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '0.9rem',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
      </div>
    </div>
  );
}

export default SearchFilter;