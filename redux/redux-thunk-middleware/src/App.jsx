import './App.css'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllData } from './freatures/gitUserSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.gitUser);
  return (
    <>
      <p>Hello</p>
      <button onClick={() => dispatch(getAllData())}>Get Github users</button>
      {data.users.map((item) => {
       return <li key={item.id}>{item.login}</li>
      })}
    </>
  )
}

export default App
