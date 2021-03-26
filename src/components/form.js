//NPM PACAKGE
import React from "react";

//MATERIAL UI
import { Grid, Button, Input } from "@material-ui/core/";

//STYLE FILE
import "./style.css";


//MAIN FUNCTION
const Form = ({
  setinputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  todo,
}) => {

  //for input
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setinputText(e.target.value);
    
  };

  //for sumbit
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setinputText("");
  };

  //select option is completed or not
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value); //form checking in react devtools
    // setFilterTodos(e.target.value)
  };

  const handleClaerALLRemoveItem = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.item !== todos.item));
  };
  return (
    <div>
      <form noValidate autoComplete="off">
        <Grid container spacing={0} className="grid">
          <Grid item xs={6}>
            <Input
              type="text"
              name="todoInput"
              placeholder="enter a todo list"
              value={inputText}
              onChange={inputTextHandler}
            />
            <Button
              disabled={todos === ""}
              color="primary"
              className="todo-button"
              type="submit"
              onClick={submitTodoHandler}
            ></Button>
          </Grid>
          <Grid item xs={1}>
            <div className="select">
              <select
                name="todos"
                className="filter-todo"
                onClick={statusHandler}
              >
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="active">Active</option>
                <option value="clearComplete">ClearAll</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <button onClick={handleClaerALLRemoveItem}>Clear All</button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Form;
