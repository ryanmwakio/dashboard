import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,faAlignJustify } from "@fortawesome/free-solid-svg-icons";


import Dashboard from './pages/dashboard/Dashboard';
import Albums from './pages/albums/Albums';
import Todos from './pages/todos/Todos';
import Users from './pages/users/Users';
import Posts from './pages/posts/Posts';
import Error from './pages/Error/Error';

import Card from './UI/Card';
import VerticalNav from './UI/VerticalNav';





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
                  icon={isVerticalNavOpen ? faTimes : faAlignJustify }
                  style={{cursor:"pointer"}}
                />
              </i>
            </span>
            {isVerticalNavOpen && <VerticalNav />}
          </div>
          <div className={`${isVerticalNavOpen ? "col-8" : "col-11 ml-5"}`}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/users" exact component={Users} />
              <Route path="/albums" exact component={Albums} />
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
  )
}

export default App
