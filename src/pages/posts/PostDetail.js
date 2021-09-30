import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import classes from "./PostDetail.module.css";
import Card from '../../UI/Card';
import { getPostsAsync } from '../../redux/features/postSlice';



function PostDetail() {

  const dispatch = useDispatch();

  const { id } = useParams();
  const postId = Number(id);


  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  //access the selected user
  const post = useSelector((state) => state.posts).filter(
    (item) => item.id === postId
  )[0];

  return (
    <>
   
      {post && (
        <div className={classes["post-detail"]}>
          <Card>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
            <hr />
          </Card>
        </div>
      )}
    </>
  );
}

export default PostDetail;
