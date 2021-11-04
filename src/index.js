import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
