import React from "react/addons";
import { RouteHandler } from "react-router";
let { TestUtils } = React.addons;


import stubRouterContext from "./stub_router_context";
import LoggedInRouter from "../../src/routers/logged_in";


describe("LoggedIn Router", function() {
  let loggedInRouterComponent;

  beforeEach(function() {
    let StubbedLoggedInRouter = stubRouterContext(LoggedInRouter);
    loggedInRouterComponent = TestUtils.renderIntoDocument(<StubbedLoggedInRouter />);
  });

  it("should return routes", function() {
    let routes = LoggedInRouter.getRoutes();

    expect(routes).to.exist;
  });

  it("should render with anchor tag in navigation", function() {
    let link = TestUtils.findRenderedDOMComponentWithTag(
      loggedInRouterComponent, "a");

    expect(link.getDOMNode().textContent).to.equal("Home");
  });

  it("should include <RouterHandler> component", function() {
    let handler = TestUtils.findRenderedComponentWithType(
      loggedInRouterComponent, RouteHandler);

      expect(handler).to.exist;
  });
});
