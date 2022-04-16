import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// css
import "./styles/GlobalStyles.css";


const container = document.getElementById("root");
const root = createRoot(container)

root.render(
  <App />
);
