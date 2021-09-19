import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import HomeDashBoardCard from "../layouts/HomeDashBoardCard";
import classes from "./Home.module.css";
import { getTodos } from "../../redux/actions/todoActions";
import { getAlbums } from "../../redux/actions/albumActions";
import { getUsers } from "../../redux/actions/userActions";
import { getPosts } from "../../redux/actions/postActions";

function Home() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchTodos = async () => {
    const req = axios.get(`${baseUrl}/todos`);

    const res = await req;

    req.then(
      () => {
        dispatch(getTodos(res.data));
      },
      (err) => err
    );
  };
  const fetchAlbums = async () => {
    const req = axios.get(`${baseUrl}/albums`);

    const res = await req;

    req.then(
      () => {
        dispatch(getAlbums(res.data));
      },
      (err) => err
    );
  };
  const fetchUsers = async () => {
    const req = axios.get(`${baseUrl}/users`);

    const res = await req;

    req.then(
      () => {
        dispatch(getUsers(res.data));
      },
      (err) => err
    );
  };
  const fetchPosts = async () => {
    const req = axios.get(`${baseUrl}/posts`);

    const res = await req;

    req.then(
      () => {
        dispatch(getPosts(res.data));
      },
      (err) => err
    );
  };
  useEffect(() => {
    fetchTodos();
    fetchPosts();
    fetchAlbums();
    fetchUsers();
    return () => {};
    // eslint-disable-next-line
  }, []);

  console.log(data);

  return (
    <Fragment>
      <div className={classes.home}>
        <div>
          <h6>Hello, welcome</h6>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="users"
              subTitle="total users"
              total={data.userReducer.users && data.userReducer.users.length}
              link="/home"
              style={{ background: "var(--primary-color)" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="posts"
              total={data.postReducer.posts && data.postReducer.posts.length}
              subTitle="total posts"
              link="/home"
              style={{ background: "var(--tertiary-color)" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="albums"
              subTitle="total albums"
              total={
                data.albumReducer.albums && data.albumReducer.albums.length
              }
              link="/home"
              style={{ backgroundColor: "var(--primary-grey)" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="todos"
              subTitle="total todos"
              total={data.todoReducer.todos && data.todoReducer.todos.length}
              link="/home"
              style={{ background: "var(--secondary-color)" }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
