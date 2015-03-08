import React from "react";
import { getData } from "../../common/request.js";


let HomePage = React.createClass({
  statics: {
    fetchData(params) {
      return getData("/home");
    }
  },

  componentWillMount() {
    console.log("[HomePage] will mount with server response: ", this.props.data.home);
  },

  render() {
    let { title } = this.props.data.home;

    return (
      <div id="home-page">
        <h1>{title}</h1>
      </div>
    );
  }
});


export default HomePage;