import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { BrowserRouter } from "react-router-dom";
import { deleteAllCookies } from "./helpers/removeCookies.js";
import "./Main.css";

store.subscribe(() => {
  localStorage.setItem(
    "productivityTasks",
    JSON.stringify(store.getState().tasks),
  );
});

window.onload = function () {
  deleteAllCookies();
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
