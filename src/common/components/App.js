import React from 'react';


class App extends React.Component {
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

App.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default App;
