/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require("../css/app.css");

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
        <Form />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
