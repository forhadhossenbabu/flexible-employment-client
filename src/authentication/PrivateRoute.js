import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../redux/store";

import DashbordHeader from "../components/dashbord_header";
import DashbordFooter from "../components/dashbord_footer";

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        store.getState().auth.is_authenticated ? (
          <React.Fragment>
            <DashbordHeader />
            <Component {...props} />
            <DashbordFooter />
          </React.Fragment>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
