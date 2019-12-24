import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../redux/store";

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        store.getState().auth.is_authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
