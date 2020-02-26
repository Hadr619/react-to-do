import React from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

// const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isCompleted: false   
    },
    {
      text: "do lunch",
      isCompleted: false
    },
    {
      text: "write great american novel",
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const todoList = todos.length ? (
    todos.map((todo, index) => (
      <Todo 
        key={index}
        index={index}
        todo={todo}
        completedTodo={completeTodo}
        removeTodo={removeTodo}
      />
    ))
  ) : (
    <p>Nothing here</p>
  );

  return (
    <div className="App">
      <div className="todo-list">
        {todoList}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
