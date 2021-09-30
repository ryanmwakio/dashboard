import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes,faAlignJustify } from "@fortawesome/free-solid-svg-icons";


import Home from './pages/dashboard/Home';
import Albums from './pages/albums/Albums';
import Photos from './pages/albums/Photos';
import Todos from './pages/todos/Todos';
import Users from './pages/users/Users';
import Posts from './pages/posts/Posts';
import Error from './pages/Error/Error';



import Card from './UI/Card';
import VerticalNav from './UI/VerticalNav';
import PostDetail from './pages/posts/PostDetail';
import UserDetail from './pages/users/UserDetail';
import AddUser from './pages/users/AddUser';








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
              <Route path="/" exact component={Home} />

              <Route path="/users" exact component={Users} />
              <Route path="/add-user" exact component={AddUser} />
              <Route path="/users/:id" exact component={UserDetail} />

              <Route path="/albums" exact component={Albums} />
              <Route path="/photos/:id" exact component={Photos} />

              <Route path="/todos" exact component={Todos} />

              <Route path="/posts" exact component={Posts} />
              <Route path="/posts/:id" exact component={PostDetail} />

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
