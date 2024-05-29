import React from 'react'
import './styles/ToDoList.css'
import ToDoCard from './ToDoCard'

function ToDoList(props) {
    const { todos } = props;

    return (
        <ul>
            {todos.map((todo, todoIndex) => {
                return <ToDoCard {...props} key={todoIndex} index={todoIndex}>
                    {todo}
                </ToDoCard>
            })}
        </ul>
    )
}

export default ToDoList
