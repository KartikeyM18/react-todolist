import React, { useState } from 'react'
import './styles/ToDoInput.css'


function ToDoInput(props) {

    const { handleAddTodos, todoVal, setToDoVal } = props;


    return (
        <header>
            <input type="text" placeholder='Enter what you want to do' value={todoVal} onChange={(e) => { setToDoVal(e.target.value) }} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleAddTodos(todoVal)
                    setToDoVal('')
                }
            }} />
            <button className='add' onClick={() => {
                handleAddTodos(todoVal)
                setToDoVal('')
            }}>Add</button>
        </header>
    )
}

export default ToDoInput
