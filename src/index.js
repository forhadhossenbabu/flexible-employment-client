import "./css/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Application from "./pages/Application";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import { set_current_user } from "./redux/_auth/action";
import set_authorization_token from "./authentication/set_authorization_token";

if (localStorage.jwtToken) {
  set_authorization_token(localStorage.jwtToken);
  const decoded_data = jwt_decode(localStorage.jwtToken);
  store.dispatch(set_current_user(decoded_data));
}

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("application_content"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
