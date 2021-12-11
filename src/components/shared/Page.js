import React from "react";
import ButtonRow from "../shared/ButtonRow";
import styled from "styled-components";
import { motion, AnimatePresence  } from "framer-motion";

const Page = ({children}) => {
    return(
        <RouteContainer>
            <ButtonRow />
            <AnimatePresence>
                <RoutePage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1}}
                >
                    {children}
                </RoutePage>
            </AnimatePresence>
        </RouteContainer>
    );
};

const RouteContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`;


const RoutePage = styled(motion.div)`
    height: 100%;
    width: 100%;
    overflow-x: auto;
`;

export default Page;