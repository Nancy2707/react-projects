import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  
  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    } else {
      alert('Please enter a task before adding.');
    }
  };
  // const scheduletask=()=>{
    
  // }
  return (
    <div>
  <div className="todoapp">
  <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo} className='AddBtn'>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* <span onClick={scheduletask}>Schedule Task</span> */}
            <button onClick={() => handleRemoveTodo(index)} id='RemBtn'>Remove</button>
          </li>
        ))}
      </ul>
  </div>
    </div>
  );
};

export default TodoList;
