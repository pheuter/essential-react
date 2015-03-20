import React from "react";
import Router from "react-router";
let { Route, DefaultRoute, RouteHandler } = Router;

import LandingPage from "../pages/landing/page";


export default class LoggedOutRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="main">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
}

LoggedOutRouter.getRoutes = function() {
  return (
    <Route name="app" path="/" handler={LoggedOutRouter}>
      <DefaultRoute name="landing" handler={LandingPage} />
    </Route>
  );
}