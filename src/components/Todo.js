import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

  const handleTodoClick = () => {
    toggleTodo (todo.id);
  }

  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.done} onClick={handleTodoClick} readOnly />
      </label>
      <span>{todo.title}</span>
    </div>
  )
}

export default Todo
