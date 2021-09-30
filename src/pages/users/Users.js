import React,{useEffect,useState,Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync } from '../../redux/features/userSlice';
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


import User from './User';
import classes from "./Users.module.css";
import TopBar from '../../UI/TopBar';


function Users() {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

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

	useEffect(() => {
		dispatch(getUsersAsync());
	}, [dispatch]);

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
    )
}

export default Users
