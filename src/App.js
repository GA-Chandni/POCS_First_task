import React, { useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Header } from "semantic-ui-react";
import Form from "./components/form";
import TodoList from "./components/todoList";

//importing components

function App() {
  //state stuff
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //function and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "active":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <Header size="huge">Todos</Header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setinputText={setinputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
