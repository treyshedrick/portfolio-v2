import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from "../app/constants";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    background-color: ${props => props.theme.main}75;
    border: 2px solid ${props => props.theme.inversePrimary};
    color: ${props => props.theme.inversePrimary};
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    height: 100%;
    border-radius: 5px;
    margin-left: ${props => props.isSmall ? null : "5px"};
    margin-top: ${props => props.isSmall ? "5px" : null};
`;

const PageContainer = ({children}) => {
    const isSmallScreen = useMediaQuery({ query: SCREEN_SIZE.SMALL });

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