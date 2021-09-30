import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dashboard from "./Dashboard";
import classes from "./Home.module.css";

import { getTodosAsync } from '../../redux/features/todoSlice';
import { getPostsAsync } from '../../redux/features/postSlice';
import { getAlbumsAsync } from '../../redux/features/albumSlice';
import { getUsersAsync } from '../../redux/features/userSlice';



function Home() {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();


  
 const albumsCount=data.albums.length;
 const todosCount=data.todos.length;
 const postsCount=data.posts.length;
 const usersCount=data.users.length;


  useEffect(() => {

   dispatch(getAlbumsAsync());
   dispatch(getTodosAsync());
   dispatch(getPostsAsync());
   dispatch(getUsersAsync());

  }, [dispatch]);


  return (
    <Fragment>
      <div className={classes.home}>
        <div>
          <h6>Hello, welcome</h6>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <Dashboard
              title="users"
              subTitle="total users"
              total={usersCount && usersCount}
              link="/home"
              style={{ background: "#effcef" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <Dashboard
              title="posts"
              total={postsCount && postsCount}
              subTitle="total posts"
              link="/home"
              style={{ background: "#ffdef7" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <Dashboard
              title="albums"
              subTitle="total albums"
              total={
                albumsCount && albumsCount
              }
              link="/home"
              style={{ backgroundColor: "#f6f6f6" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <Dashboard
              title="todos"
              subTitle="total todos"
              total={todosCount&& todosCount}
              link="/home"
              style={{ background: "#ffefe2" }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
