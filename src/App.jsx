import React, { useState } from 'react'

import Display from './components/Display'
import Opertators from './components/Opertators'

function App() {
  const actions = ['+',"-","*","/","."]
  const [number,setNumber] = useState('0')

  const addToInput = e => {
    const value = e.target.value
    if(number === "0") {
      setNumber(value)
    }
    else{
      setNumber(number+value)
    }
  }

  const oper = e => {
    const value = e.target.value
    if(actions.includes(number.slice(-1))) {
      setNumber(number.slice(0,-1)+value)
    }
    else {
      setNumber(number+value)
    }
  }

  const calc = () => {
    setNumber(eval(number).toString())
  }

  const clearall = () => {
    setNumber("0")
  }

  const clear = () => {
    if (number === "0" || number.length == 1) {
      setNumber("0")
    }
    else {
      setNumber(number.slice(0,-1))
    }
  }

  return (
      <div className='flex justify-center items-center h-screen bg-zinc-700'>
        <div className='max-w-[20rem]'>
          <Display value={number}/>
          <Opertators addToInput={addToInput} clearall={clearall} clear={clear} oper={oper} calc={calc}/>
        </div>
      </div>
  )
}

export default App