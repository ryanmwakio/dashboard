import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./PostDetail.module.css";
import { selectedPost } from "../../redux/actions/postActions";
import Card from "../UI/Card";

function PostDetail() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const postId = Number(id);

  const fetchPostDetail = async () => {
    const req = axios.get(`${baseUrl}/posts/${postId}`);
    const res = await req;

    req.then(
      () => {
        dispatch(selectedPost(res.data));
        setLoading(false);
      },
      (err) => err
    );
  };

  useEffect(() => {
    fetchPostDetail();
    return () => {};
    // eslint-disable-next-line
  }, []);

  //access the selected user
  const post = useSelector((state) => state.postReducer.posts).filter(
    (item) => item.id === postId
  )[0];

  return (
    <>
      {loading && <p>Loading...</p>}
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
