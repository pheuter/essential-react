/**
 * App entry point
 */

// Shims and Polyfills
import "es5-shim";
import "es5-shim/es5-sham";
import "console-polyfill";
import "babelify/polyfill";

// Libraries
import React from "react";
import Router from "react-router";

// Common utilities
import Session from "./common/session.js";

// Routers
import LoggedOutRouter from "./routers/logged_out.jsx";
import LoggedInRouter from "./routers/logged_in.jsx";


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";


// Initialize routes depending on session
let routes;

if (Session.isLoggedIn()) {
  routes = LoggedInRouter.getRoutes();
} else {
  routes = LoggedOutRouter.getRoutes();
}

/**
 * Given a set of routes and params associated with the current active state,
 * call #fetchData(params) on all Route Handlers that define that static method.
 *
 * This is the main mechanism by which a route handler (page)
 * requests its data.
 *
 * @example Defining a route handler that requests data
 *
 *  var SomePage = React.createClass({
 *    statics: {
 *      fetchData(params) {
 *        return getData({
 *          data: {...}
 *        })
 *      }
 *    }
 *  })
 *
 *  Given a Route handler:
 *    <Route name="some-page" handler={SomePage} />
 *
 *  when it becomes activated, it will be passed a {data} prop containing the response:
 *    <SomePage data="..." />
 *
 *
 * @param  {[Route]} routes list of activated routes
 * @param  {[Param]} params route params
 *
 * @return {Promise}        data containing responses mapped by route name
 */
let fetchData = async function(routes, params) {
  let data = {};

  await Promise.all(routes.map(async route => {
    if(!route.handler.fetchData) return;
    data[route.name] = await route.handler.fetchData(params);
  }));

  return data;
}

// Start the router
Router.run(routes, async function(Handler, state) {
  let data = await fetchData(state.routes, state.params);
  React.render(<Handler data={data} />, document.getElementById(DOM_APP_EL_ID));
});
