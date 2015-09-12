import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

import LandingPage from "../pages/landing/page";


export default class LoggedOutRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }

  static getRoutes = function() {
    return (
      <Route name="app" path="/" handler={LoggedOutRouter}>
        <DefaultRoute name="landing" handler={LandingPage} />
      </Route>
    );
  }
}
