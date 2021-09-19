import React from "react";
import { Link } from "react-router-dom";

import classes from "./Album.module.css";

function Album(props) {
  return (
    <>
      <div className={`${classes.album} col-md-3 col-sm-6`}>
        <Link to={`/photos/${props.id}`}>
          <hr />
          <h4>{props.title}</h4>
          <hr />
        </Link>
      </div>
    </>
  );
}

export default Album;
