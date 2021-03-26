import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core/";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css";

const Todo = ({ text, todos, todo, setTodos }) => {
  //events

  //calling delete functionlity
  const deleteHandler = () => {
    setTodos(todos.filter((elements) => elements.id !== todo.id));
    // console.log(todo);
  };

  //completed list
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        // console.log('comp',item); //check items
          if (item.id === todo.id) {
              return {           
              ...item,completed:!item.completed
          }
        }
        return item;    // items return
      })
    );
  };

  return (
    //UI PART WITH JSX
    <div className="todo">
      <Grid item xs={12} className="grid-todo">
          {/*======================= adding dynamic css ================= */}
        <li className={ `todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>  

        <Button variant="contained" color="primary" onClick={completeHandler}>
          <CheckBoxIcon />
        </Button>
        <Button variant="contained" color="primary" onClick={deleteHandler}>
          <DeleteIcon style={{ backgroundColor: "#338b88" }} />
        </Button>
      </Grid>

      
    </div>
  );
};
export default Todo;
