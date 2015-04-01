import React from "react/addons";
import { RouteHandler } from "react-router";
let { TestUtils } = React.addons;

import stubRouterContext from "./stub_router_context";
import LoggedOutRouter from "../../src/routers/logged_out";


describe("LoggedOut Router", function() {
  let loggedOutRouterComponent;

  beforeEach(function() {
    let StubbedLoggedOutRouter = stubRouterContext(LoggedOutRouter);
    loggedOutRouterComponent = TestUtils.renderIntoDocument(<StubbedLoggedOutRouter />);
  });

  it("should return routes", function() {
    let routes = LoggedOutRouter.getRoutes();

    expect(routes).to.exist;
  });

  it("should include <RouterHandler> component", function() {
    let handler = TestUtils.findRenderedComponentWithType(
      loggedOutRouterComponent, RouteHandler);

      expect(handler).to.exist;
  });
});
