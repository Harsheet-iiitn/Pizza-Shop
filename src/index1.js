import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "";

const rootElement = document.getElementById("root1");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);