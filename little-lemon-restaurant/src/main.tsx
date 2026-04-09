import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@/styles/index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Failed to find the root element");
}

const rootElement = createRoot(root);

rootElement.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
