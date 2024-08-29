import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SmoothScrollHero } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollHero />
  </StrictMode>,
);
