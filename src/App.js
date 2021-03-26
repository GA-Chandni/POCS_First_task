//NPM PACAKGE
import React, { useState, useEffect } from "react";
import "./App.css";

//SEMANTIC UI 
import { Header } from "semantic-ui-react";

//LOCAL FILES
import Form from "./components/form";
import TodoList from "./components/todoList";

//importing components

function App() {
  //state stuff
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  // const [count,setCount]=useState([0]);

  //refresh page get empty array in localstorage
  useEffect(() => {
    getLocalStroageTodos();
  }, []);

  //filter handles here
  useEffect(() => {
    // console.log('hey rightgit')
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); 

  //filterable like all completed active
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  //save to local strorage :
  const saveLocalTodos = () => {
    let JSONLocalData = JSON.stringify(todos);
    localStorage.setItem("todos", JSONLocalData); //saving
  };

  //for refresh page get empty array old data are not removing still with page
  const getLocalStroageTodos = () => {
    if (localStorage.getItem("todos") === null) {
      let JSONDataArray = JSON.stringify([]);
      localStorage.setItem("todos", JSONDataArray); //pushing
    } else {
      let JSONLocalStrorageData = JSON.parse(localStorage.getItem("todos"));
      // console.log(JSONLocalStrorageData); //check the pre data in localStorage
      setTodos(JSONLocalStrorageData);
    }
  };

  // console.log('filterTodos--', filterTodos);

  return (
    <div className="App">
      <Header size="huge">Todos</Header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setinputText={setinputText}
        setStatus={setStatus}
        // filterTodos={filterTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
