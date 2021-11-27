import React from "react";
import Page from "../shared/Page";
import styled from "styled-components";
import * as Devicon from "../shared/Icons";
import OrchestrationContainer from "../shared/OrchestrationContainer";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Header = styled.div`
    font-size: ${props => props.theme.fontSize.lg};
    margin: ${props => props.isSmall ? "0px": "10px"};
    border-bottom: ${props => `1.5px solid ${props.theme.fontColor}`};
`;

const SkillSetBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
`;

const HeaderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
`;

const Skills = () => {
    return (
        <Page>
            <HeaderBlock>
                <Header>Skills</Header>
                Everything from styling with styled components to creating relational databases, I create functional code that works and write tests using tools such as Jest and React Testing Library!
            </HeaderBlock>
            <SkillSetBlock>
                <Header>Front-End Development</Header>
                <OrchestrationContainer>
                    <Row>
                        <Devicon.ReactIcon />
                        <Devicon.HTMLIcon />
                        <Devicon.CSSIcon />
                        <Devicon.JavascriptIcon />
                        <Devicon.JQueryIcon />
                        <Devicon.BootStrapIcon />
                        <Devicon.MUIIcon />
                        <Devicon.TailwindIcon />
                    </Row>
                </OrchestrationContainer>
            </SkillSetBlock>
            <SkillSetBlock>
                <Header>Back-End Development</Header>
                <OrchestrationContainer>
                    <Row>
                        <Devicon.NodeIcon />
                        <Devicon.ExpressIcon />
                        <Devicon.PHPIcon />
                        <Devicon.PostgresIcon />
                        <Devicon.MSSQLIcon />
                        <Devicon.MYSQLIcon />
                    </Row>
                </OrchestrationContainer>
            </SkillSetBlock>
            <SkillSetBlock>
                <Header>Tools & Technologies</Header>
                <OrchestrationContainer>
                    <Row>
                        <Devicon.GitHubDIcon />
                        <Devicon.GitLabIcon />
                        <Devicon.AWSIcon />
                        <Devicon.JestIcon />
                        <Devicon.WebpackIcon />
                        <Devicon.JiraIcon />
                        <Devicon.VSCodeIcon />
                    </Row>
                </OrchestrationContainer>
            </SkillSetBlock>
        </Page>
    );
};

export default Skills;