import React from "react";
import Page from "../shared/Page";
import styled from "styled-components";
import OrchestrationContainer from "../shared/OrchestrationContainer";
import ProjectCard from "../shared/ProjectCard";
import ColorGameImage from "../../assets/color-game.png";
import NintenLifeImage from "../../assets/nintenlife.png";
import RNWebImage from "../../assets/react-native-web-quickstart.png";
import BaseUIESLintImage from "../../assets/baseui-eslint.png";
import { PROJECT_DESCRIPTIONS, GITHUB_URLS, DEMO_URLS } from "../app/constants";

const Header = styled.div`
    font-size: ${props => props.theme.fontSize.lg};
    margin: ${props => props.isSmall ? "0px": "10px"};
    border-bottom: ${props => `1.5px solid ${props.theme.fontColor}`};
`;

const HeaderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
    text-align: center;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
                    <ProjectCard image={NintenLifeImage} name="Nintenlife" description={PROJECT_DESCRIPTIONS.NINTENLIFE} githubUrl={GITHUB_URLS.NINTENLIFE} />
                    <ProjectCard image={RNWebImage} name="React Native Quickstart" description={PROJECT_DESCRIPTIONS.RN_QUICKSTART} demoUrl={DEMO_URLS.RN_QUICKSTART} githubUrl={GITHUB_URLS.RN_QUICKSTART} />
                    <ProjectCard image={BaseUIESLintImage} name="eslint-plugin-baseui-clean-overrides" description={PROJECT_DESCRIPTIONS.BASEUI_ESLINT} demoUrl={DEMO_URLS.BASEUI_ESLINT} githubUrl={GITHUB_URLS.BASEUI_ESLINT} />
                    <ProjectCard image={ColorGameImage} name="Color Game" description={PROJECT_DESCRIPTIONS.COLOR_GAME} demoUrl={DEMO_URLS.COLOR_GAME} githubUrl={GITHUB_URLS.COLOR_GAME} />
                </Row>
            </OrchestrationContainer>
        </Page>
    );
};

export default Projects;