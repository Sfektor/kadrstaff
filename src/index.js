import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import { GlobalStyle } from "./style/GlobalStyle";
import { Helmet } from "react-helmet";

Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <GlobalStyle />
  </>
);
