import React from "react";
import styled from "styled-components";
import Routes from "./Routes";
import ThemeProvider from "./ThemeProvider";
import UserInfo from "../shared/UserInfo";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.main};
  display: flex;
  flex-direction: row;
`;


function App() {
    return (
        <ThemeProvider>
            <AppContainer>
                <UserInfo />
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
