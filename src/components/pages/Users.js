import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import TopBar from "../../utils/TopBar";
import classes from "./Users.module.css";

import User from "../layouts/users/User";
import { getUsers } from "../../redux/actions/userActions";

function Users() {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.error("Error", err);
      });
    dispatch(getUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={classes.users}>
        <div>
          <TopBar>
            <h4>Users</h4>
            <button className="btn btn-sm btn-outline-dark">add user</button>
          </TopBar>
          <div className="row mt-4">
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
