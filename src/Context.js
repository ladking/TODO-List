import React from 'react'
import {nanoid} from 'nanoid'
import { useState } from 'react'
const Context =React.createContext()
function ContextWrap({children}) {
    const [task, setTask] = useState(
        {
            id: nanoid(),
            todo:'',
            deadline:'',
            reminder:''
        }
    )
    const [list, setList] = useState([
        {
            id: nanoid(),
            todo:'Go to gym',
            deadline:'10pm',
            reminder:'false'
        },
        {
            id: nanoid(),
            todo:'Go to market',
            deadline:'Tomorrow',
            reminder:'true'
        },
        {
            id: nanoid(),
            todo:'Buy House',
            deadline:'Wednesday',
            reminder:'true'
        }
    ])

    const [form, setForm] = useState(true)
    console.log(form)

    function showForm(){
        setForm(!form)
    }


    function handleChange(e, id){
        const{value, name, type, checked } = e.target
        setTask( prev => {
            return{
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        }
        )

    }
    function addTask(){
        {task.todo && setList( prev => [...prev ,task])}
        setTask( {
            id: nanoid(),
            todo:'',
            deadline:'',
            reminder:''
        })
    }
    function deleteTask(id){
        setList(prev => prev.filter(prev => prev.id !== id))
    }
    function remind(id){
        setList(list.map(prev => prev.id === id ? {...prev, reminder: !prev.reminder} : prev))
    }
  return (
    <Context.Provider value={{task, handleChange, addTask, deleteTask, form, remind, showForm, list}}>
        {children}
    </Context.Provider>
  )
}

export {Context, ContextWrap}