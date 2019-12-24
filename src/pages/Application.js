import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./home_page";
import RegisterPage from "./register_page";
import AccountVerifyPage from "./account_verify_page";
import AccountNotVerified from "./account_not_activate";
import Login from "./login_page";

import PrivateRoute from "../authentication/PrivateRoute";
// import EmployerDashbord from "./employer-dashbord";
import EmployerDashbordRoutes from "./employer-dashbord/employer_dashbord_routes";

class Application extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/account-verify/:token"
            component={AccountVerifyPage}
          />
          <Route
            exact
            path="/account-not-verified"
            component={AccountNotVerified}
          />

          <PrivateRoute
            path="/employer-dashbord"
            component={EmployerDashbordRoutes}
          />
          <Route render={() => <h2>404 NOT FOUND</h2>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Application;
