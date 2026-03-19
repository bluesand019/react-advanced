import './App.css'
import { useReducer } from 'react'

function counterReducer(state, action) {
  switch(action.type) {
    case 'INCREASE_COUNTER': {
      return {
        ...state,
        count: state.count+1
      }
    }
    case 'DECREASE_COUNTER': {
      return {
        ...state,
        count: state.count-1
      }
    }
    default: return state
  } 
}

function App() {
  const [counterState, dispatch] = useReducer(counterReducer, {
    count:0
  })
  
const handleIncrease = () => {
  dispatch({
    type: 'INCREASE_COUNTER'
  })
}

const handleDecrease = () => {
  dispatch({
    type: 'DECREASE_COUNTER'
  })
}

  return (
    <>
      {counterState.count}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default App
