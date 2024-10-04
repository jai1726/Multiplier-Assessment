import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (newTodo.trim() === '') return;

    const res = await axios.post('http://localhost:5000/todos', { text: newTodo });
    setTodos([...todos, res.data]);
    setNewTodo('');
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new to-do"
            className="p-2 w-full border rounded-l focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo._id} className="flex justify-between items-center p-2 border-b">
              <span>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;