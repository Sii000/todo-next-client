import { useEffect, useState } from 'react';

const SERVER_ENDPOINT = 'https://effective-disco-pjr5699prx4pf76x-5000.app.github.dev/'

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch(`${SERVER_ENDPOINT}/todos`);
    const list = await response.json();
    setTodos(list);
  };

  const addTodo = async (todo) => {
    await fetch(`${SERVER_ENDPOINT}/todos`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
      }
    );
    fetchTodos();
  };
  
  const deleteTodo = async (index) => {
    await fetch(`${SERVER_ENDPOINT}/todos/${index}`,
      {
        method: 'DELETE',
      }
    );
    fetchTodos();
  };

  const toggleTodo = async (index) => {
    todos[index].done = !todos[index].done;
    await fetch(`${SERVER_ENDPOINT}/todos/${index}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todos[index])
      }
    );
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const clearTodos = async () => {
    await fetch(`${SERVER_ENDPOINT}/todos`,
      {
        method: 'DELETE',
      }
    );
    fetchTodos();
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearTodos,
  };
};
