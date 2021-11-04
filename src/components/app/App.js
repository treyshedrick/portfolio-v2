import React from "react";
import styled from "styled-components";
import Routes from "./Routes";
import ThemeProvider from "./ThemeProvider";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;

function App() {
    return (
        <ThemeProvider>
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
