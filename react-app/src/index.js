require("file-loader?name=[name].[ext]!./index.html");

import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

// import FormInput from "./FormInput";

ReactDOM.render(<App />, document.getElementById("app"));
