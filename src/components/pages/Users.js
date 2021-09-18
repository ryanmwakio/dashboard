import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import TopBar from "../../utils/TopBar";
import classes from "./Users.module.css";

import User from "../layouts/users/User";
import { getUsers } from "../../redux/actions/userActions";

function Users() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const req = axios.get(`${baseUrl}/users`);

    const res = await req;

    req.then(
      () => {
        dispatch(getUsers(res.data));
        setLoading(false);
      },
      (err) => err
    );
  };

  const paginatedUsers = users.slice(0, 6);

  useEffect(() => {
    fetchUsers();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={classes.users}>
        {users && (
          <div>
            <TopBar>
              <h4>Users</h4>
              <Link to="/add-user" className="btn btn-sm btn-outline-dark">
                add user
              </Link>
            </TopBar>
            <div className="row mt-4">
              {loading && <p>Loading...</p>}

              {users &&
                paginatedUsers.map((user) => {
                  return (
                    <User
                      key={user.id}
                      id={user.id}
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
        )}
      </div>
    </Fragment>
  );
}

export default Users;
