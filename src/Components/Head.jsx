import React, { useContext } from 'react'
import { Context } from '../Context'

function Head() {
  const {showForm, form} = useContext(Context)
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-red-700 font-bold text-2xl'>
            To-Do List
        </h1>
        <button onClick={showForm} className='bg-red-700 rounded-lg p-2 hover:bg-red-400'>
          {form ? 'Close' : 'Add Item'}
        </button>
    </div>
  )
}

export default Head