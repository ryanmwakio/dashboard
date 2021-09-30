import React, { Fragment } from "react";

import AddUserForm from "./AddUserForm";

import classes from "./AddUser.module.css";

function AddUser() {
  return (
    <Fragment>
      <div className={classes["add-user"]}>
        <h6>Add User</h6>
        <div className="card p-md-4 p-sm-1 col-md-6 col-sm-12">
          <AddUserForm />
        </div>
      </div>
    </Fragment>
  );
}

export default AddUser;
