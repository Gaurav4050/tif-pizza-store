import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customBreakpoints = {
  sm: "320px",
  md: "768px",
  lg: "940px",
  xl: "1200px",
};

const theme = extendTheme({
  breakpoints: customBreakpoints,
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
