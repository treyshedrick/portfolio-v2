import React from "react";
import styled from "styled-components";
import OrchestrationContainer from "./OrchestrationContainer";
import { motion } from "framer-motion";


const Card = styled(motion.div)`
    height: 400px;
    width: 400px;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 50%;
`;

const ProjectCard = ({image}) => {
    return(
        <Card>
            <OrchestrationContainer>
                <ProjectImage src={image} />
            </OrchestrationContainer>
        </Card>
    );
};

export default ProjectCard;