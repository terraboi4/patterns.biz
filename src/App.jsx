import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center m-3 p-3 w-full'>
      <h1 className='text-5xl font-bold p-3'>Patterns.biz 🔥</h1>
      <input className='input input-primary'/>
    </div>
  )
}

export default App 
