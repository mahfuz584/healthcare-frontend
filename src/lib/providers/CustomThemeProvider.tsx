"use client";
import { theme } from "@lib/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default CustomThemeProvider;
