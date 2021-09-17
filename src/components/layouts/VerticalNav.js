import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUsers,
  faBlog,
  faImages,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./VerticalNav.module.css";
import Logo from "../../assets/images/weza-icon.jpg";

function VerticalNav() {
  return (
    <Fragment>
      <section className={classes["vertical-nav"]}>
        <i className={classes.logo}>
          <img src={Logo} alt="" />
        </i>
        <ul className={classes["nav-links"]}>
          <li>
            <NavLink to="/">
              <i>
                <FontAwesomeIcon icon={faHome} />
              </i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              <i>
                <FontAwesomeIcon icon={faUsers} />
              </i>
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">
              <i>
                <FontAwesomeIcon icon={faBlog} />
              </i>
              <span>Posts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums">
              <i>
                <FontAwesomeIcon icon={faImages} />
              </i>
              <span>Albums</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos">
              <i>
                <FontAwesomeIcon icon={faList} />
              </i>
              <span>Todos</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </Fragment>
  );
}

export default VerticalNav;
