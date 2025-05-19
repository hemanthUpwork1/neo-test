import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import authConfig from "./auth_config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain as string}
      clientId={authConfig.clientId as string}
      authorizationParams={authConfig.authorizationParams}
    >
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
