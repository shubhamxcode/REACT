import { useCallback,useEffect,useRef,useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(6)
  const[numberallowed,setnumberallowed] =useState(false);
  const[charallowed,setcharallowed] =useState(false);
  const [password,setpassword] =useState("")

  const passwordref=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) {
      str+="0123456789"
    }
    if (charallowed) {
      str+="@#%%&**;.';'"
    }
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numberallowed,charallowed,setpassword])

  //copy
  const copytoclipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordref.current.select()
    // passwordref.current?.setSelectionRange(0,9)
  },[password])





  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed.charallowed,passwordgenerator])
  return (
    <div className='bg-gray-700 p-20 rounded-3xl'>
      <div className='text-2xl mb-4'>password generator</div>
      <div className=''>
        <input type="text" 
        value={password} 
        ref={passwordref}
        placeholder='password' 
        readOnly
        className='bg-white px-36 py-2 text-center rounded-2xl text-orange-500'/>
        <button className='bg-indigo-500 rounded-2xl ml-2 border-none' onClick={copytoclipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
           max={100} 
          value={length}
          className=' cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label className=' text-orange-600 text-xl'>Length : {length}</label>
        </div>
        <div className='text-center flex gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberallowed} 
          onChange={()=>{
            setnumberallowed((prev)=> !prev);
          }}/>
          <label className='text-xl text-orange-500'>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setcharallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='text-orange-500 text-xl'>Characters</label>
      </div>
      </div>

    </div>
  )
}

export default App



// useCallback(fn,dependecies)
// dependencies is array