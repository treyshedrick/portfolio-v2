import { motion } from "framer-motion";
import styled from "styled-components";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const Container = styled(motion.div)`
    height: 100%;
`;

const OrchestrationContainer = ({children}) => {
    return (
        <Container
            initial="hidden"
            animate="visible"
            variants={list}
        >
            {children}
        </Container>
    );
};

export default OrchestrationContainer;