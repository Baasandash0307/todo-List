'use client'

import { useState } from "react";
export default function Home() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const arr = [];
    arr.push({title: "hicheel zaah" , createAt: new Date()})
    setTodos(arr);
  }
  const sub = () => {
    
  }

  return (
    <div>
      <h1>ToDo</h1>
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
      <button onClick={sub}>X</button>
    </div>
  );
}
