import React from "react";
import styled from "styled-components";
import Routes from "./Routes";
import ThemeProvider from "./ThemeProvider";
import UserInfo from "../shared/UserInfo";
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from "./constants";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, 
    ${props => props.theme.main},
    ${props => props.theme.primary});
  display: flex;
  flex-direction: ${props => props.isSmall ? "column" : "row"};
  padding: ${props => props.isSmall ? "20px" : "10%"};
  justify-content: center;
`;


function App() {
    const isSmallScreen = useMediaQuery({ query: SCREEN_SIZE.SMALL });

    return (
        <ThemeProvider>
            <AppContainer isSmall={isSmallScreen}>
                <UserInfo />
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
