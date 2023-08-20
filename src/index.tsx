import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "~/App";
import store from "~/store/main.store";

import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </React.Fragment>
  </Provider>
);
