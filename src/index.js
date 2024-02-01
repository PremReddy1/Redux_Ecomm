import React from "react";
import ReactDOM from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";

import { Provider } from "react-redux";
import prodStore from "./redux/product-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={prodStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
