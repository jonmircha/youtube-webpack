import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";
import logo from "./assets/webpack.svg";
import data from "./data.json";
import { HelloWorld } from "./components/HelloWorld.jsx";

ReactDOM.render(
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  document.getElementById("app")
);
