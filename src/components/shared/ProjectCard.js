import React from "react";
import styled from "styled-components";
import OrchestrationContainer from "./OrchestrationContainer";
import { motion } from "framer-motion";

const cardItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
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

const ProjectTitle = styled.div`
    font-size: ${props => props.theme.fontSize.lg};
    margin-top: 5px;
    text-align: center;
`;

const ProjectDescription = styled.div`
    font-size: ${props => props.theme.fontSize.md};
    margin-top: 5px;
    text-align: center;
`;

const ProjectCard = ({image, name, description}) => {
    return(
        <Card variants={cardItem}>
            <OrchestrationContainer>
                <ProjectImage src={image} />
                <ProjectTitle>{name}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
            </OrchestrationContainer>
        </Card>
    );
};

export default ProjectCard;