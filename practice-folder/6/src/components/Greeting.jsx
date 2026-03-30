import React, { useState } from 'react';

const Greeting = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h1>Hello, {name}!</h1>
      <p>You have clicked the button {count} times.</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Greeting;