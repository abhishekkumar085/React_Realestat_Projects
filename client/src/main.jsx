import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider domain="dev-2pxdkqu7ulzp8hyp.us.auth0.com"
  clientId="t1gcUyVNyeVn0F5XFOvz5PUYGyAxLZw0"
  authorizationParams={{
    redirect_uri:"http://localhost:5173"
  }}
   audience="http://localhost:3000"
   scope="openid profile email">

    <App />
  </Auth0Provider>
  </React.StrictMode>
);
