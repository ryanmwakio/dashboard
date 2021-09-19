import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Post.module.css";

function Post(props) {
  return (
    <Fragment>
      <div className={`${classes.post} col-md-3 col-sm-6`}>
        <Link to={`/posts/${props.id}`}>
          <h4 className={classes.username}>{props.title}</h4>
        </Link>
        <hr />
        <p className={classes["extra-info"]}>{props.body}</p>
      </div>
    </Fragment>
  );
}

export default Post;
