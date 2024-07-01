import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0'>
        <div className='flex  gap-8 bg-white px-3 py-2 rounded-3xl'>
          <button className='bg-red-600 px-4 rounded-xl' onClick={()=>setcolor("red")}>red</button>
          <button className='bg-blue-600 px-4 rounded-xl' onClick={(()=>setcolor("blue"))}>blue</button>
          <button className='bg-purple-700 px-4 rounded-xl' onClick={(()=>setcolor("purple"))}>puple</button>
          <button className='bg-green-600 px-4 rounded-xl'onClick={()=>setcolor("green")}>green</button>
        </div>
      </div>
    </div>
  )
}

export default App
