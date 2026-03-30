import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'


function App() {

  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Sam" />
    </div>
  )
}

export default App
