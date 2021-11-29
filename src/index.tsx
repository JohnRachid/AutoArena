import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./screens/home/home";


setInterval(render, 1000 / 60);

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}