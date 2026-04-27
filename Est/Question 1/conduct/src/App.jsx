import './App.css'
import ListAll from './Components/ListAll'
import { useState } from 'react'

function App() {
  const [num , setNum] = useState(0);
  const handel = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>
        <h1>{num}</h1>
        <button onClick={handel}>Increment</button>
      </div>
      <ListAll></ListAll>
    </>
  )
}

export default App
