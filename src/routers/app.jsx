import React from "react";
import { Route, RouteHandler } from "react-router";

// Routers
import LoggedOutRouter from "./logged_out";
import LoggedInRouter from "./logged_in";

// Common utilities
import Session from "../common/session";


// Media queries
// import { MatchMediaBase } from "radium"


// MatchMediaBase.init({
//   sm: "(min-width: 768px)",
//   md: "(min-width: 992px)",
//   lg: "(min-width: 1200px)"
// });

export default class AppRouter extends React.Component {
  constructor() {
    // this.mixins = [MatchMediaBase]
  }

  render() {
    return (
      <RouteHandler {...this.props} />
    );
  }
}

AppRouter.getRoutes = function() {
  let routes;

  if (Session.isLoggedIn()) {
    routes = LoggedInRouter.getRoutes();
  } else {
    routes = LoggedOutRouter.getRoutes();
  }

  return (
    <Route name="app" path="/" handler={AppRouter}>
      {routes}
    </Route>
  );
}
