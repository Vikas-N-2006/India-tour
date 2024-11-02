import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container flex flex-col justify-center items-center mx-6 mt-60">
     <p className='p-2 font-semibold'>the count is {count}</p>
     <button className='btn  border-2 rounded-md border-black p-1' onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
    </>
  )
}

export default App
