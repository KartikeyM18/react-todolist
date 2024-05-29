import React, { useState , useEffect } from 'react'
import './App.css'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {


  const [todos, setTodos] = useState([
    
  ])


  const [todoVal, setToDoVal] = useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodos = [...todos, newTodo]
    persistData(newTodos);
    setTodos(newTodos)
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodos)
    setTodos(newTodos)
  }

  function handleEditTodo(index) {
    const todoValEdited = todos[index]
    setToDoVal(todoValEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {

    if(!localStorage) return

    let localTodos = localStorage.getItem('todos')

    if(!localTodos) return

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  

  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} todoVal={todoVal} setToDoVal={setToDoVal} />
      <ToDoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />

    </>
  )
}

export default App
