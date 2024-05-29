import React from 'react'
import './styles/ToDoCard.css'

function ToDoCard(props) {

    const { children, handleDeleteTodo, index, handleEditTodo } = props;


    return (

        <li >
            {children}
            <div className="action">



                <i onClick={() => {
                    handleEditTodo(index)
                }} className="fa-solid fa-pen-to-square"></i>

                <i onClick={() => {
                    handleDeleteTodo(index)
                }} className="fa-solid fa-trash"></i>

            </div>
        </li>

    )
}

export default ToDoCard
