import React from "react";
import ReactDOM from "react-dom";
import { browser } from "webextension-polyfill-ts";
import Popup from "./popup";
import "../scss/app.scss";

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
  ReactDOM.render(<Popup />, document.getElementById("popup"));
});
