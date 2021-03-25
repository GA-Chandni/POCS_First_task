import React from "react";
import Todo from "./todo";
import "./style.css";

const TodoList = ({text, todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id} //key
            todo={todo} //todo
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
