import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(15);

const addValue =() =>{
  if(counter < 20){ 
    counter += 1;
  }else{
    counter ;
  }
  
  setCounter(counter);
}
const removeValue =() =>{
  if(counter > 0){ 
    counter -= 1;
  }else{
    counter ;
  }
  
  setCounter(counter);
}

  return (
    <>
     
      <h1> Chai aur Code</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>Value: {counter}</p>

    </>
  )
}

export default App
