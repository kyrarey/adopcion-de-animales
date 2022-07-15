import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import FavContextProvider from "./context/FavContext";
import HistoryContextProvider from "./context/HistoryContext";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// import bootstrap from 'bootstrap'
// import { configureStore } from "redux"; 
//import { Provider } from "react-redux";

/* const store = configureStore(); */

ReactDOM.createRoot(document.getElementById("root")).render(
  /*  <Provider store={store}> */
    <BrowserRouter>
      <AuthContextProvider>
        <FavContextProvider>
          <HistoryContextProvider>
            <App />
          </HistoryContextProvider>
        </FavContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  /*  </Provider> */
);
