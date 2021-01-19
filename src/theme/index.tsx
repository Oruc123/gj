import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Theme: React.FC<React.ReactNode> = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
