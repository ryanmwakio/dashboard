import React from "react";

import classes from "./Photo.module.css";

function Photo(props) {
  return (
    <>
      <div className={`${classes.photo} col-md-3 col-sm-6`}>
        <div className={classes.photoContainer}>
          <img src={props.thumbnailUrl} alt="" />
        </div>
        <p>{props.title}</p>
      </div>
    </>
  );
}

export default Photo;
