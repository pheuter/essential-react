import React from "react";

/**
 * Basic component that takes an optional `message` prop and
 * renders its contents inside a heading.
 */
var SampleComponent = React.createClass({
  render() {
    return (
      <h1>{this.props.message}</h1>
    );
  }
});


export default SampleComponent;