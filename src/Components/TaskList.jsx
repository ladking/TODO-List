import React, { useContext } from 'react'
import { Context } from '../Context'
import {FaTrash} from 'react-icons/fa'

function TaskList() {
    const {list, deleteTask, remind} = useContext(Context)
    
    const todos = list.map(prev =>(
        <div key={prev.id} onDoubleClick={(e) =>remind(prev.id)} className={` flex  justify-between items-center bg-gray-200 mt-4 rounded-lg p-4 border border-gray-400 ${ prev.reminder ? 'border-l-green-400 border-l-4': null}`}>
            <div>
                <h1 className='text-xl font-bold underline'>{prev.todo}</h1>
                <p className='font-bold'>{prev.deadline}</p>
            </div>
            <FaTrash onClick={() => deleteTask(prev.id)} />
        </div>
      ))
  return (
    <div>
        { list.length === 0 ?
            <h1 className='text-center font-bold mt-4 '>You Currently have no Task</h1>: 
        <div>
            <p>Double Click to toggle reminder</p>
         {todos}
        </div>}
    </div>
  )
}

export default TaskList