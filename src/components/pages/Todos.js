import React, { Fragment } from "react";
import classes from "./Todos.module.css";

function Todos() {
  return (
    <Fragment>
      <div className={classes.todos}>
        <h4>Todos</h4>
      </div>
    </Fragment>
  );
}

export default Todos;
