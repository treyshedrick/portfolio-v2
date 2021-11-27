import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
    height: 40px;
    width: 100%;
    margin: 0px 10px;
    background-color: ${props => props.theme.secondary}90;
    color: ${props => props.theme.inversePrimary};
    border: 0;  
    border-radius: 0;
    font-family: ${props => props.theme.fontFamily};
    &:hover {
        opacity: .5;
        background-color: ${props => props.theme.inversePrimary}90;
        color: ${props => props.theme.primary};
        cursor: pointer;
    }
`;

const ProjectButton = ({ label }) => {
    return (
        <Button>{label}</Button>
    );
};

export default ProjectButton;