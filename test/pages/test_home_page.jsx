import React from "react/addons";
let { TestUtils } = React.addons;

import HomePage from "../../src/pages/home/page";


describe("HomePage Component", function() {
  it("should render with data props", function() {
    let data = {
      home: {
        title: 'Test Home Page Title'
      }
    }

    let homePageComponent = TestUtils.renderIntoDocument(
      <HomePage data={data} />
    );

    let heading = TestUtils.findRenderedDOMComponentWithTag(
      homePageComponent, "h1");

    expect(heading.getDOMNode().textContent).to.equal('Test Home Page Title');
  });
});