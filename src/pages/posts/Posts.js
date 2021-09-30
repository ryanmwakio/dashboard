import React,{useEffect,useState,Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAsync } from '../../redux/features/postSlice';
import ReactPaginate from "react-paginate";

import Post from './Post';
import classes from "./Posts.module.css";

function Posts() {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getPostsAsync());
	}, [dispatch]);

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


    return (
        <Fragment>
        <div className={classes.posts}>
          <h4>Posts</h4>
          
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
    )
}

export default Posts
