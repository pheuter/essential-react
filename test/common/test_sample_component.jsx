import expect from "expect.js";

import React from "react/addons";
let { TestUtils } = React.addons;

import SampleComponent from "../../src/common/sample_component.jsx";


describe("Sample Component", function() {
  it("should render with no props", function() {
    let sampleComponent = TestUtils.renderIntoDocument(
      <SampleComponent />
    );

    let heading = TestUtils.findRenderedDOMComponentWithTag(
      sampleComponent, "h1");

    expect(heading.getDOMNode().textContent).to.be.empty();
  });

  it("should render with props", function() {
    let sampleComponent = TestUtils.renderIntoDocument(
      <SampleComponent message="Testing" />
    );

    let heading = TestUtils.findRenderedDOMComponentWithTag(
      sampleComponent, "h1");

    expect(heading.getDOMNode().textContent).to.equal("Testing");
  });
});