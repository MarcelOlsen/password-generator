import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OptionsProvider } from "./components/Contexts/OptionsContext.tsx";
import { PasswordProvider } from "./components/Contexts/PasswordContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>
      <PasswordProvider>
        <App />
      </PasswordProvider>
    </OptionsProvider>
  </React.StrictMode>
);
