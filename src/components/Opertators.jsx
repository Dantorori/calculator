import React from 'react'

function Opertators(props) {


  return (
    <div className='grid gap-3 grid-cols-4 bg-gray-100 p-5 rounded-b-lg'>
      <button className='icon' onClick={props.clear}>AC</button>
      <button className='icon'>+/-</button>
      <button className='icon'>%</button>
      <button className='icon col-start-4 row-start-1'>/</button>
      <button className='icon col-start-4 row-start-2'>*</button>
      <button className='icon col-start-4 row-start-3'>-</button>
      <button className='icon col-start-4 row-start-4'>+</button>
      <button className='icon col-start-3 col-span-2 row-start-5'>=</button>
      <button value="9" className='icon' onClick={props.addToInput}>9</button>
      <button value="8" className='icon' onClick={props.addToInput}>8</button>
      <button value="7" className='icon' onClick={props.addToInput}>7</button>
      <button value="6" className='icon' onClick={props.addToInput}>6</button>
      <button value="5" className='icon' onClick={props.addToInput}>5</button>
      <button value="4" className='icon' onClick={props.addToInput}>4</button>
      <button value="3" className='icon' onClick={props.addToInput}>3</button>
      <button value="2" className='icon' onClick={props.addToInput}>2</button>
      <button value="1" className='icon' onClick={props.addToInput}>1</button>
      <button value="0" className='icon' onClick={props.addToInput}>0</button>
      <button className='icon'>.</button>
    </div>
  )
}

export default Opertators