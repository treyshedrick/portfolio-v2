import { ThemeProvider as StyledThemeProvider } from "styled-components";
import React from "react";
import { useColorScheme } from 'use-color-scheme';

const theme = {
    main: "#415A77",
    primary: "#E0E1DD",
    secondary: "#778DA9",
    inversePrimary: "#0D1B2A",
    inverseSecondary: "#1B263B",
    fontColor: "#0D1B2A"
};

const darkTheme = {
    main: "#415A77",
    primary: "#0D1B2A",
    secondary: "#1B263B",
    inversePrimary: "#E0E1DD",
    inverseSecondary: "#778DA9",
    fontColor: "#E0E1DD"
};

const ThemeProvider = ({children}) => {
    const { scheme } = useColorScheme();
    const isDark = scheme === "dark";

    return (
        <StyledThemeProvider theme={isDark ? darkTheme : theme}>
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;