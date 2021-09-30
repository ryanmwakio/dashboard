import React from "react";

import classes from "./Todo.module.css";

function Todo(props) {
  return (
    <>
      <div className={`${classes.todo} col-md-3 col-sm-6`}>
        #{props.id}
        <hr />
        <h6>{props.title}</h6>
        <hr />
        {props.completed ? (
          <p className="text-success">completed</p>
        ) : (
          <p className="text-danger">Not yet completed</p>
        )}
        <hr />
      </div>
    </>
  );
}

export default Todo;
