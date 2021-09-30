import React, { Fragment } from "react";

import classes from "./Dashboard.module.css";

function Dashboard(props) {
  return (
    <Fragment>
      <div className={classes.HomeDashBoardCard} style={props.style}>
        <div>
          <h4 className={classes.title}>{props.title}</h4>
          <span className={classes["sub-title"]}>{props.subTitle}</span>
          <h4 className={classes.total}>{props.total}</h4>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
