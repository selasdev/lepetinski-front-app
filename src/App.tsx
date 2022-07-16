import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
