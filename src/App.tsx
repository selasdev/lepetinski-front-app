import React from "react";
import { ThemeProvider } from "styled-components";
import { AuthenticationProvider } from "./contexts/Auth/context";
import Routes from "./routes";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/global";

const DEFAULT_AUTH_STATUS = {
  authenticated: false,
  user: null,
};

const App = () => {
  return (
    <AuthenticationProvider values={DEFAULT_AUTH_STATUS}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </AuthenticationProvider>
  );
};

export default App;
