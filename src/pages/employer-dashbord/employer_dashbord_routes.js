import React from "react";
import { Route, Switch } from "react-router-dom";
import DashbordHeader from "../../components/dashbord_header";
import DashbordFooter from "../../components/dashbord_footer";

import EmployerDashbord from "./index";

const employer_dashbord_routes = () => {
  return (
    <div>
      <DashbordHeader />
      <Switch>
        <Route exact path="/employer-dashbord" component={EmployerDashbord} />
      </Switch>
      <DashbordFooter />
    </div>
  );
};

export default employer_dashbord_routes;
