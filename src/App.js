import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All'); // Initial filter set to "All"

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Function to filter todos based on the selected filter
  const filteredTodos = () => {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.completed);
      case 'Active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos; // For "All"
    }
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <AddTodo addTodo={addTodo} />
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </div>
      <TodoList todos={filteredTodos()} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
