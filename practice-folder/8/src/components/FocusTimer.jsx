import { useState, useEffect } from 'react';

function FocusTimer() {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      alert("Time's up! Take a break.");
      setIsActive(false);
      setSeconds(1500);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500);
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{
      background: '#f0f4f8',
      padding: '15px',
      borderRadius: '12px',
      marginTop: '20px',
      textAlign: 'center',
      border: '1px dashed #cbd5e0'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>⏱️ Focus Session</h3>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2d3748' }}>
        {formatTime(seconds)}
      </div>
      
      <div style={{ height: '4px', background: '#e2e8f0', margin: '10px 0' }}>
        <div style={{ 
          height: '100%', 
          background: '#4a90e2', 
          width: `${(seconds / 1500) * 100}%`,
          transition: 'width 1s linear' 
        }} />
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={toggleTimer} style={{
          padding: '5px 15px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: isActive ? '#f6ad55' : '#48bb78',
          color: 'white',
          cursor: 'pointer'
        }}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer} style={{ backgroundColor: 'grey', border: '1px solid #ccc', cursor: 'pointer', borderRadius: '6px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default FocusTimer;