import React from 'react'

function Display(props) {
  return (
    <div className='flex bg-gray-100 border-b-2 rounded-t-lg'>
      <div className='ml-auto p-5'>
        <span className='text-3xl'>{props.value}</span>
      </div>
    </div>
  )
}

export default Display