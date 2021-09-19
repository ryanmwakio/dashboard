import React, { Fragment, useEffect, useState } from "react";

import classes from "./Albums.module.css";

function Albums() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  return (
    <Fragment>
      <div className={classes.albums}>
        <h4>Albums</h4>
      </div>
    </Fragment>
  );
}

export default Albums;
