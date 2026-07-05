import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "./index.css";
import "../globals.scss";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
