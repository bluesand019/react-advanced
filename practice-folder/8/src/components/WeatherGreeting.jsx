import { useState, useEffect } from 'react';

function WeatherGreeting() {
  const [greeting, setGreeting] = useState('');
  const [icon, setIcon] = useState('☀️');

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      setGreeting('Good Morning');
      setIcon('☕');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
      setIcon('🌤️');
    } else {
      setGreeting('Good Evening');
      setIcon('🌙');
    }
  }, []); // Runs once on mount

  return (
    <div style={{
      background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
      color: 'white',
      padding: '15px',
      borderRadius: '12px',
      marginBottom: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0 }}>{icon} {greeting}!</h2>
      <p style={{ margin: '5px 0 0', opacity: 0.9, fontSize: '0.9rem' }}>
        Ready to conquer your goals today?
      </p>
    </div>
  );
}

export default WeatherGreeting;