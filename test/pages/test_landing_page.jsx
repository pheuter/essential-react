import React from "react/addons";
let { TestUtils } = React.addons;

import LandingPage from "../../src/pages/landing/page";


describe("LandingPage Component", function() {
  it("should render with data props", function() {
    let data = {
      landing: {
        title: 'Test Landing Page Title'
      }
    }

    let landingPageComponent = TestUtils.renderIntoDocument(
      <LandingPage data={data} />
    );

    let heading = TestUtils.findRenderedDOMComponentWithTag(
      landingPageComponent, "h1");

    expect(heading.getDOMNode().textContent).to.equal('Test Landing Page Title');
  });
});