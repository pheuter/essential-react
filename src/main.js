/**
 * App entry point
 */

// Polyfill
import "babel-polyfill";

// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Routes
import Routes from './common/components/Routes';

// Base styling
import "./common/base.css";


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";



// Render the router
ReactDOM.render((
  <Router history={createBrowserHistory()}>
    {Routes}
  </Router>
), document.getElementById(DOM_APP_EL_ID));
