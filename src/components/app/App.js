import React from "react";
import styled from "styled-components";
import ThemeProvider from "./ThemeProvider";
import UserInfo from "../shared/UserInfo";
import { motion } from "framer-motion";
import { useIsSmallScreen } from "./hooks";
import PageContainer from "../shared/PageContainer";

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
                <PageContainer />
            </AppContainer>
        </ThemeProvider>
    );
}

const AppContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, 
    ${props => props.theme.main},
    ${props => props.theme.primary});
  display: flex;
  flex-direction: ${props => props.isSmall ? "column" : "row"};
  padding: ${props => props.isSmall ? "10px" : "50px"};
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

export default App;
