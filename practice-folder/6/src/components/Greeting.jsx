import React, { useState } from 'react';
import StatusBadge from './StatusBadge';
import MoodEmoji from './MoodEmoji';
import "../App.css"



const Greeting = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className='card' style={{ 
      border: '2px solid #646cff', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxWidth: '300px'
    }}>
      <StatusBadge count={count} />
      
      <h1>Hey, {name}!</h1>
      
      <MoodEmoji count={count} />
      
      <p>Clicks: <strong>{count}</strong></p>
      
      <button 
        onClick={() => setCount(count + 1)}
        className="btn-boost"
      >
        Boost Mood
      </button>
    </div>
  );
};

export default Greeting;