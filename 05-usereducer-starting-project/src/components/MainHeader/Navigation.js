import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {props.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {props.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {props.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
