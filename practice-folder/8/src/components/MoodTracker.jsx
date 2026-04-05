import { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('neutral');

  const moods = {
    happy: { emoji: '😎', color: '#FFF9C4', text: 'Keep that energy up!' },
    neutral: { emoji: '😐', color: '#F5F5F5', text: 'Steady as she goes.' },
    focused: { emoji: '🧠', color: '#E1F5FE', text: 'In the zone!' },
    tired: { emoji: '😴', color: '#EDE7F6', text: 'Maybe a short break?' }
  };

  const current = moods[mood];

  return (
    <div style={{
      marginTop: '20px',
      padding: '15px',
      borderRadius: '12px',
      backgroundColor: current.color,
      transition: 'background-color 0.5s ease',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', fontWeight: 'bold' }}>
        Current Vibe: {current.emoji}
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
        {Object.keys(moods).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            style={{
              fontSize: '1.2rem',
              cursor: 'pointer',
              background: mood === m ? 'white' : 'transparent',
              border: mood === m ? '2px solid #333' : '1px solid #ccc',
              borderRadius: '8px',
              padding: '5px 10px'
            }}
          >
            {moods[m].emoji}
          </button>
        ))}
      </div>
      <small style={{ fontStyle: 'italic', color: '#555' }}>{current.text}</small>
    </div>
  );
}

export default MoodTracker;