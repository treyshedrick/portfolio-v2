import React from "react";
import styled from "styled-components";
import Routes from "./Routes";
import ThemeProvider from "./ThemeProvider";
import UserInfo from "../shared/UserInfo";
import { motion } from "framer-motion";
import { useIsSmallScreen } from "./hooks";

const AppContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, 
    ${props => props.theme.main},
    ${props => props.theme.primary});
  display: flex;
  flex-direction: ${props => props.isSmall ? "column" : "row"};
  padding: ${props => props.isSmall ? "20px" : "10%"};
  justify-content: center;
  overflow-y: hidden;
`;

const container = {
    hidden: { opacity: .5 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 100
        }
    }
};


function App() {
    const isSmallScreen = useIsSmallScreen();

    return (
        <ThemeProvider>
            <AppContainer
                variants={container}
                initial="hidden"
                animate="show"
                isSmall={isSmallScreen} 
            >
                <UserInfo />
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
