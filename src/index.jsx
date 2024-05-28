import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AviasalesApp from "./components/AviasalesApp/AviasalesApp";
import store from "./components/store/store";

const container = document.getElementById("root");
const rootInstance = createRoot(container);

rootInstance.render(
  // <React.StrictMode>
  <Provider store={store}>
    <AviasalesApp />
  </Provider>,
  // </React.StrictMode>
);
