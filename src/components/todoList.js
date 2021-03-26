import React from "react";
import Todo from "./todo";
import "./style.css";

const TodoList = ({text, todos, setTodos ,filterTodos}) => {
  // console.log(todos);
  // console.log('filterTodos',filterTodos);      //underfined 
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (          //todo instead filtertodos
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
