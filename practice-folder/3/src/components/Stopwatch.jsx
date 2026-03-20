import React from 'react'
import "../App.css"

const Stopwatch = () => {
  return (
    <div className='container'>
      <h1>00:00:00</h1>
      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
    </div>
    </div>
  )
}

export default Stopwatch
