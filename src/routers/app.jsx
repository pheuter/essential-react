import React from "react";
import { Route, RouteHandler } from "react-router";

// Routers
import LoggedOutRouter from "./logged_out";
import LoggedInRouter from "./logged_in";

// Common utilities
import Session from "../common/session";


export default class AppRouter extends React.Component {
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
