import React, { Fragment } from "react";

import UpdateUserForm from "../layouts/users/UpdateUserForm";

import classes from "./UpdateUser.module.css";

function AddUser() {
  return (
    <Fragment>
      <div className={classes["update-user"]}>
        <h6>Update User</h6>
        <div className="card p-md-4 p-sm-1 col-md-6 col-sm-12">
          <UpdateUserForm />
        </div>
      </div>
    </Fragment>
  );
}

export default AddUser;
