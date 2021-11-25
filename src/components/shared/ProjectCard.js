import React from "react";
import styled from "styled-components";
import OrchestrationContainer from "./OrchestrationContainer";
import { motion } from "framer-motion";

const card = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
};

const cardItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: .2, y: 0},
};

const Card = styled(motion.div)`
    height: 400px;
    width: 375px;
    margin: 25px 20px;
    border: ${props => `1.5px solid ${props.theme.fontColor}`};
    border-radius: 5px;
`;

const ProjectImage = styled(motion.img)`
    width: 100%;
    height: 275px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: ${props => `1.5px solid ${props.theme.fontColor}`};
`;

const ProjectTitle = styled(motion.div)`
    font-size: ${props => props.theme.fontSize.lg};
    margin-top: 5px;
    text-align: center;
`;

const ProjectDescription = styled(motion.div)`
    font-size: ${props => props.theme.fontSize.md};
    margin-top: 5px;
    text-align: center;
`;

const ProjectCard = ({image, name, description}) => {
    return(
        <Card variants={card}>
            <OrchestrationContainer>
                <ProjectImage src={image} variants={cardItem} />
                <ProjectTitle variants={cardItem}>{name}</ProjectTitle>
                <ProjectDescription variants={cardItem}>{description}</ProjectDescription>
            </OrchestrationContainer>
        </Card>
    );
};

export default ProjectCard;