import React from 'react';


export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };
  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    );
  }
}
