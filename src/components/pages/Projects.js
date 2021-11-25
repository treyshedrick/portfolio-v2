import React from "react";
import Page from "../shared/Page";
import styled from "styled-components";
import OrchestrationContainer from "../shared/OrchestrationContainer";
import ProjectCard from "../shared/ProjectCard";
import ColorGameImage from "../../assets/color-game.png";


const Header = styled.div`
    font-size: ${props => props.theme.fontSize.lg};
    margin: ${props => props.isSmall ? "0px": "10px"};
    border-bottom: ${props => `1.5px solid ${props.theme.fontColor}`};
`;

const HeaderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 10px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Projects = () => {
    return (
        <Page>
            <HeaderBlock>
                <Header>Projects</Header>
                Check out some of the projects I have worked on!
            </HeaderBlock>
            <OrchestrationContainer>
                <Row>
                    <ProjectCard image={ColorGameImage} name="Color Game" />
                    <ProjectCard image={ColorGameImage} />
                    <ProjectCard image={ColorGameImage} />
                    <ProjectCard image={ColorGameImage} />
                </Row>
            </OrchestrationContainer>
        </Page>
    );
};

export default Projects;