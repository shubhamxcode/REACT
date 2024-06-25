import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
let[counter,setcounter]=useState(1)
function value(){
  setcounter(counter+1)
}
function remove(){
  setcounter(counter-1)
}
  return (
    <>
    <h1>shubham varshney {counter}</h1>
    <h2>counter value {counter}</h2>
    <button onClick={value}>Add value</button> <br />
    <button onClick={remove}>remove value</button>
    </>
  )
}

export default App
