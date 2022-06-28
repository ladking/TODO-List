import React, { useContext } from 'react'
import { Context } from '../Context'
import Head from './Head'
import Input from './Input'
import TaskList from './TaskList'

function Body() {
  const {form} = useContext(Context)
  return (
    <div className='bg-white p-4 sm:w-1/2 w-screen border-4 border-blue-400 overflow-auto'>
        <Head />
        {form ? <Input /> :''}
        <TaskList />
    </div>
  )
}

export default Body