import React from 'react';

function Todo({todo, index, completedTodo, removeTodo}) {
    return(
        <div
         className="todo"
         style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
         >
        {todo.text}
            <div>
            <button onClick={() => completedTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default Todo;