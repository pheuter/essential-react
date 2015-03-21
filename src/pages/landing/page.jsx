import React from "react";
import { getData } from "../../common/request";


export default class LandingPage extends React.Component {
  componentWillMount() {
    console.log("[LandingPage] will mount with server response: ", this.props.data.landing);
  }

  render() {
    let { title } = this.props.data.landing;

    return (
      <div id="landing-page">
        <h1>{title}</h1>
      </div>
    );
  }
}

LandingPage.fetchData = function(params) {
  return getData("/landing");
}