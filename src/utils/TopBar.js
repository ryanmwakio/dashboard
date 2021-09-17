import React from "react";
import classes from "./TopBar.module.css";

function TopBar(props) {
  return <div className={classes["top-bar"]}>{props.children}</div>;
}

export default TopBar;
