import React, { createContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

export const TemplateContext = createContext(null);

const theme = createTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        height: "95%",
        top: 18,
        left: 69,
        width: "24.8%",
        boxShadow: "none",
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "unset",
      },
    },
  },
});

const TemplateProvider = ({ children }) => {
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
