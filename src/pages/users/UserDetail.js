import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import classes from "./UserDetail.module.css";
import { getUsersAsync } from '../../redux/features/userSlice';
import { deleteUserAsync } from '../../redux/features/userSlice';
import Card from '../../UI/Card';


function UserDetail(props) {
  const userId = Number(props.match.params.id);

  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  //access the selected user
  const user = useSelector((state) => state.users).filter(
    (item) => item.id === userId
  )[0];

  const deleteSelectedUser = async () => {
    // eslint-disable-next-line no-restricted-globals
    let isExecuted = confirm(`Are you sure you want to delete ${user.name}?`);
    if (isExecuted) {
      dispatch(deleteUserAsync({userId}))
      history.push("/users");
    }
  };

  return (
    <Fragment>
      <div className={classes["user-detail"]}>
        <Link to="/users" className="btn btn-outline-dark  btn-sm m-2">
          back to users
        </Link>
        
        {!user && <p>An error ocurred please go back to users</p>}
        {user && (
          <Card>
            <div className="card">
              <div className="card-body">
                <h4>{user.name}</h4>
                <hr />
                <h4>Details</h4>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <hr />
                <h4>Company</h4>
                <p>company Name: {user.company.name}</p>
                <p>company Motto: {user.company.catchPhrase}</p>
                <hr />
                <h4>Address</h4>
                <p>
                  Street:{" "}
                  {`${user.address.street}, ${user.address.suite} ${user.address.city}`}
                </p>
                <hr />
                <button
                  className="btn btn-danger btn-sm"
                  onClick={deleteSelectedUser}
                >
                  delete
                </button>
                <Link
                  to={`/update-user/${user.id}`}
                  className="btn btn-success btn-sm mx-2"
                >
                  update
                </Link>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Fragment>
  );
}

export default UserDetail;
