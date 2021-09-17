import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import TopBar from "../../utils/TopBar";
import classes from "./Users.module.css";

import User from "../layouts/users/User";

function Users() {
  const users = useSelector((state) => state.userReducer.users);
  console.log(users);

  return (
    <Fragment>
      <div className={classes.users}>
        <div>
          <TopBar>
            <h4>Users</h4>
            <button className="btn btn-sm btn-outline-dark">add user</button>
          </TopBar>
          <div className="row">
            {users.map((user) => {
              return (
                <User
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  username={user.username}
                  website={user.website}
                  address={user.address}
                  myClasses="col-md-3 col-sm-6"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Users;
