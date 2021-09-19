import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";

import classes from "./Posts.module.css";
import { getPosts } from "../../redux/actions/postActions";
import Post from "../layouts/posts/Post";

function Posts() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 3;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          myClasses="col-md-8 col-sm-12"
        />
      );
    });

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const fetchPosts = async () => {
    const req = axios.get(`${baseUrl}/posts`);

    const res = await req;

    req.then(
      () => {
        dispatch(getPosts(res.data));
        setLoading(false);
      },
      (err) => err
    );
  };

  useEffect(() => {
    fetchPosts();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={classes.posts}>
        <h4>Posts</h4>
        {loading && <p>Loading...</p>}
        <div className="row mt-4">
          {posts && displayPosts}
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
    </Fragment>
  );
}

export default Posts;
