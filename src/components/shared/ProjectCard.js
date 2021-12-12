import React from "react";
import styled from "styled-components";
import OrchestrationContainer from "./OrchestrationContainer";
import { motion } from "framer-motion";
import ProjectButton from "./ProjectButton";
import PropTypes from "prop-types";


const ProjectCard = ({image, name, description, demoUrl, githubUrl}) => {
    return(
        <Card variants={card} whileHover={{ scale: 1.075 }}>
            <OrchestrationContainer>
                <ProjectImage src={image} variants={cardItem} />
                <ProjectTitle variants={cardItem}>{name}</ProjectTitle>
                <ProjectDescription variants={cardItem}>{description}</ProjectDescription>
                <ButtonRow>
                    {demoUrl && <ProjectButton label="Demo" url={demoUrl} />}
                    {githubUrl && <ProjectButton label="Source Code" url={githubUrl}/>}
                </ButtonRow>
            </OrchestrationContainer>
        </Card>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string
};

const card = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
};

const cardItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
};

const Card = styled(motion.div)`
    height: 100%;
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

export default ProjectCard;