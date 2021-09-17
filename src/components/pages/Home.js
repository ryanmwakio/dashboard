import React, { Fragment } from "react";
import HomeDashBoardCard from "../layouts/HomeDashBoardCard";
import classes from "./Home.module.css";

function Home() {
  return (
    <Fragment>
      <div className={classes.home}>
        <div>
          <h6>Hello, welcome</h6>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="users"
              subTitle="total users"
              total={10}
              link="/home"
              style={{ background: "var(--primary-color)" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="posts"
              total={100}
              subTitle="total posts"
              link="/home"
              style={{ background: "var(--tertiary-color)" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="albums"
              subTitle="total albums"
              total={100}
              link="/home"
              style={{ backgroundColor: "var(--primary-grey)" }}
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <HomeDashBoardCard
              title="todos"
              subTitle="total todos"
              total={200}
              link="/home"
              style={{ background: "var(--secondary-color)" }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
