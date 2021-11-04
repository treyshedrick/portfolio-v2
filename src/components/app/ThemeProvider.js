import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
    main: "white"
};

const darkTheme = {
    main: "gray"
};

const ThemeProvider = ({children}) => {
    return(<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>);
};

export default ThemeProvider;