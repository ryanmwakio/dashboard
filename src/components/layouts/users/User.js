import React, { Fragment } from "react";
import classes from "./User.module.css";

function User(props) {
  return (
    <Fragment>
      <div className={`${classes.user} col-md-3 col-sm-6`}>
        <h4 className={classes.username}>{props.name}</h4>
        <hr />
        <p className={classes["extra-info"]}>phone: {props.phone}</p>
        <p className={classes["extra-info"]}>email: {props.email}</p>
      </div>
    </Fragment>
  );
}

export default User;
