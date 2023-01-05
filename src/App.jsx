import React, { useState } from 'react'

import Display from './components/Display'
import Opertators from './components/Opertators'

function App() {
  const [number,setNumber] = useState(0)

  const addToInput = e => {
    const value = e.target.value
    if(number === 0) {
      setNumber(value)
    }
    else{
      setNumber(number+value)
    }
  }

  const clear = () => {
    setNumber(0)
  }

  return (
      <div className='flex justify-center items-center h-screen bg-zinc-700'>
        <div className=''>
          <Display value={number}/>
          <Opertators addToInput={addToInput} clear={clear}/>
        </div>
      </div>
  )
}

export default App