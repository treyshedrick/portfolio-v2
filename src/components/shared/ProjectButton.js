import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectButton = ({ label, url }) => {

    const openUrl = () => {
        window.open(url, "_blank");
    };

    return (
        <Button whileHover={{ scale: 1.025 }} onClick={openUrl}>{label}</Button>
    );
};

ProjectButton.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
};

const Button = styled(motion.button)`
    height: 40px;
    width: 100%;
    margin: 0px 10px;
    background-color: ${props => props.theme.secondary}90;
    color: ${props => props.theme.inversePrimary};
    border: 1px solid ${props => props.theme.inversePrimary};  
    border-radius: 2rem;
    font-family: ${props => props.theme.fontFamily};
    &:hover {
        background-color: ${props => props.theme.inversePrimary}90;
        color: ${props => props.theme.primary};
        cursor: pointer;
    }
`;

export default ProjectButton;