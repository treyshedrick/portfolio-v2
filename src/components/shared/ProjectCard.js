import React from "react";
import styled from "styled-components";
import OrchestrationContainer from "./OrchestrationContainer";
import { motion } from "framer-motion";
import ProjectButton from "./ProjectButton";

const card = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
};

const cardItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
};

const Card = styled(motion.div)`
    height: auto;
    width: 375px;
    margin: 25px 20px;
    border: ${props => `1.5px solid ${props.theme.fontColor}`};
    border-radius: 5px;
`;

const ProjectImage = styled(motion.img)`
    width: 100%;
    height: auto;
    display: flex;
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
    font-size: ${props => props.theme.fontSize.sm};
    margin-top: 5px;
    text-align: center;
`;

const ButtonRow = styled(motion.div)`
    display: flex;
    flex-direction: row;
    margin: 10px 0px;
`;

const DescriptionBlock = styled(motion.div)`
    height: calc(100% - ${props => props.imgHeight}px);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProjectCard = ({image, name, description, imgHeight}) => {
    console.log(imgHeight);
    return(
        <Card variants={card} whileHover={{ scale: 1.075 }}>
            <OrchestrationContainer>
                <ProjectImage src={image} variants={cardItem} />
                <DescriptionBlock variants={cardItem} imgHeight={imgHeight}>
                    <ProjectTitle variants={cardItem}>{name}</ProjectTitle>
                    <ProjectDescription variants={cardItem}>{description}</ProjectDescription>
                    <ButtonRow>
                        <ProjectButton label="Demo"/>
                        <ProjectButton label="Source Code"/>
                    </ButtonRow>
                </DescriptionBlock>
            </OrchestrationContainer>
        </Card>
    );
};

export default ProjectCard;