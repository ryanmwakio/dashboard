import React, { Fragment } from "react";

import classes from "./Card.module.css";

function Card(props) {
  return (
    <Fragment>
      <div
        className={`classes.card ${props.cardShadow && classes["card-shadow"]}`}
      >
        {props.children}
      </div>
    </Fragment>
  );
}

export default Card;
