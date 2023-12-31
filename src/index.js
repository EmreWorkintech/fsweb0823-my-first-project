import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { myStore } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { SiteGlobalProvider } from "./contexts/SiteGlobalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SiteGlobalProvider>
    <Router>
      <Provider store={myStore}>
        <App />
      </Provider>
    </Router>
  </SiteGlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
