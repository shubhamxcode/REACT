import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const obj={
  username:"hehehe",
  age:18,
  skiil:"leaning"
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className='bg-green-700 text-black rounded-xl '>TAILWIND CSS</h1>
      <Card  btntext="sher" someobj={obj}/>
      <Card />
    </>
  )
}

export default App


