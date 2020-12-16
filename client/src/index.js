import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Auth0WithHistory from "../src/component/Auth0-With-History/auth0-with-history.component";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0WithHistory>
        <App />
      </Auth0WithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
