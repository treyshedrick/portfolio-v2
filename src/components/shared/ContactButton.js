import React from "react";
import styled from "styled-components";
import { LABELS } from "../app/constants";
import { motion } from "framer-motion";

const StyledAnchor = styled(motion.a)`
    display: flex;
    justify-content: baseline;
    padding: 0px 5px;
    text-decoration: none;
    color: ${props => props.theme.inversePrimary};
    &:hover {
        opacity: .5;
        color: ${props => props.theme.primary};
    }
`;

const Text = styled.div`
    font-size: ${props => props.theme.fontSize.md};
    padding-top: ${props => props.customAlign ? "1px" : ""};
    margin-left: 5px;
`;

const ContactButton = ({icon, text, src }) => {
    const customAlign = text === LABELS.LINKEDIN;

    return (
        <StyledAnchor   
            whileHover={{ scale: 1.2 }}
            href={src}
            target={text !== LABELS.EMAIL ? "_blank" : ""}
        >
            {icon}
            <Text customAlign={customAlign}>{text}</Text>
        </StyledAnchor>
    );

};

export default ContactButton;