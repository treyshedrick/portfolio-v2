import styled from "styled-components";
import { motion } from "framer-motion";
import { useIsSmallScreen } from "../app/hooks";

const Container = styled(motion.div)`
    background-color: ${props => props.theme.main}40;
    border: 2px solid ${props => props.theme.inversePrimary};
    color: ${props => props.theme.inversePrimary};
    width: 100%;
    max-width: 1000px;
    height: ${props => props.isSmall ? "100%" : "700px"};
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    margin-left: ${props => props.isSmall ? null : "5px"};
    margin-top: ${props => props.isSmall ? "5px" : null};
`;

const PageContainer = ({children}) => {
    const isSmallScreen = useIsSmallScreen();

    return(
        <Container
            initial={{y: 1000, opacity: .1}}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 1}}
            isSmall={isSmallScreen}
        >
            {children}
        </Container>
    );
};

export default PageContainer;