import React, { useContext } from 'react'
import { Context } from '../Context'

function Input() {
  const {handleChange, task, addTask} = useContext(Context)
  return (

   <div className='mt-4 border-2 p-4'>
      <div>
        <label htmlFor='add'>Add Task</label>

        <input 
          className='bg-gray-200 w-full p-2' 
          name='todo'
          placeholder='Add to the list' 
          value={task.todo} 
          onChange={(e) => handleChange(e, task.id)}
        />

      </div>

      <div>
        <label htmlFor='deadline'>DeadLine</label>

        <input 
          className='bg-gray-200 w-full p-2' 
          type='text'
          name='deadline' 
          placeholder='Set a Deadline' 
          value={task.deadline}
          onChange={(e) => handleChange(e, task.id)}
        />
      </div>

      <div className='flex items-center justify-between mt-4'>
        <label htmlFor='reminder'>Set Reminder</label>

        <input 
          type='checkbox' 
          checked={task.reminder}
          onChange={(e) => handleChange(e, task.id)}
          name= 'reminder'
         />
      </div>

      <button onClick={addTask} className='p-2 bg-red-700 rounded-lg w-full mt-4 hover:bg-red-400'>Save Task</button>
    </div>
  )
}

export default Input