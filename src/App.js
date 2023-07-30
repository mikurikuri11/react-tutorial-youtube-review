import React from 'react';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';

function App() {
  // hooks
  const [ todos, setTodo ] = useState([]);

  const todoTitleRef = useRef();

  // functions
  const handleAddTodo = () => {
    if (todoTitleRef.current.value === '') return;
    const newTodo = {
      id: uuidv4(), title: todoTitleRef.current.value, done: false
    }
    setTodo([...todos, newTodo]);
    todoTitleRef.current.value = '';
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.done = !todo.done;
    setTodo (newTodos);
  }

  const handleClearTodo = () => {
    const newTodos = todos.filter(todo => !todo.done);
    setTodo (newTodos);
  }

  // render
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>
        <input type='text' ref={todoTitleRef}></input>
      </div>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClearTodo} >完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter(todo => !todo.done).length}</div>
    </>
  );
}

export default App;
