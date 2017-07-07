import React from "react";
import { nodeEnv } from '../../common/mutuals';


export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h3>{nodeEnv}</h3>
        <p>Thanks for joining!</p>
      </div>
    );
  }
}
