import React from "react";
import { Grid, Button, Input } from "@material-ui/core/";
import "./style.css";

const Form = ({ setinputText, todos, setTodos ,inputText,setStatus}) => {

  //for input 
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setinputText(e.target.value);
  };

  //for sumbit
  const submitTodoHandler = (e) => {
    e.preventDefault(); 
    setTodos([
        ...todos,
         { text : inputText, completed: false , id:Math.random()* 1000}]);
         setinputText("");
  };


  //select option is completed or not 
const statusHandler=(e)=>{
  console.log(e.target.value);
  setStatus(e.target.value) //form checking in react devtools
}
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
              variant="contained"
              color="primary"
              className="todo-button"
              type="submit"
              onClick={submitTodoHandler}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={1}>
            <div className="select">
              <select name="todos" className="filter-todo" onClick={statusHandler}>
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="active">Active</option>
              </select>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Form;
