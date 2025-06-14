import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./styles/index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
