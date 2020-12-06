import React from "react";
export const siteThemes = {
  dark: {
    background: "#000000",
    text: "#ffffff",
    code: "#272c34",
    active: "#90caf9",
    page: "#121212",
    appbar: "#333333",
  },
  light: {},
};

export const theme = "react_hooks_theme";

const ThemeContext = React.createContext(siteThemes.dark);

export default ThemeContext;
