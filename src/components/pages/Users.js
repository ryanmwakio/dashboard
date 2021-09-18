import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

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

  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
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
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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

              {users && displayUsers}
              <div className={classes.paginationContainer}>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={classes["paginationBttns"]}
                  previousLinkClassName={classes["previousBttn"]}
                  nextLinkClassName={classes["nextBttn"]}
                  disabledClassName={classes["paginationDisabled"]}
                  activeClassName={classes["paginationActive"]}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Users;
