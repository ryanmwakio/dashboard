import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Card from "./components/UI/Card";
import VerticalNav from "./components/layouts/VerticalNav";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserDetail from "./components/pages/UserDetail";
import Posts from "./components/pages/Posts";
import Todos from "./components/pages/Todos";
import Albums from "./components/pages/Albums";
import Error from "./components/pages/Error";

function App() {
  const [isVerticalNavOpen, setIsVerticalNavOpen] = useState(true);

  const toggleVerticalNav = () => {
    return setIsVerticalNavOpen(!isVerticalNavOpen);
  };
  return (
    <Fragment>
      <section className="main">
        <Card cardShadow={true}>
          <div className="row">
            <div className="col-4">
              <span className="toggle-vertical-nav" onClick={toggleVerticalNav}>
                <i>
                  <FontAwesomeIcon
                    icon={isVerticalNavOpen ? faToggleOff : faToggleOn}
                  />
                </i>
              </span>
              {isVerticalNavOpen && <VerticalNav />}
            </div>
            <div className={`${isVerticalNavOpen ? "col-8" : "col-11 ml-5"}`}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/albums" exact component={Albums} />
                <Route path="/users" exact component={Users} />
                <Route path="/users/:id" exact component={UserDetail} />
                <Route path="/todos" exact component={Todos} />
                <Route path="/posts" exact component={Posts} />
                <Route>
                  <Error />
                </Route>
              </Switch>
            </div>
          </div>
        </Card>
      </section>
    </Fragment>
  );
}

export default App;
