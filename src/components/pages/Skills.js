import React from "react";
import Page from "../shared/Page";
import * as Devicon from "../shared/Icons";
import OrchestrationContainer from "../shared/OrchestrationContainer";

const Skills = () => {
    return (
        <Page>
            Front-End Development
            <OrchestrationContainer>
                <Devicon.ReactIcon />
                <Devicon.HTMLIcon />
                <Devicon.CSSIcon />
                <Devicon.JavascriptIcon />
                <Devicon.JQueryIcon />
                <Devicon.BootStrapIcon />
                <Devicon.MUIIcon />
                <Devicon.TailwindIcon />
            </OrchestrationContainer>
            Back-End Development
            <OrchestrationContainer>
                <Devicon.NodeIcon />
                <Devicon.ExpressIcon />
                <Devicon.PHPIcon />
                <Devicon.PostgresIcon />
                <Devicon.MSSQLIcon />
                <Devicon.MYSQLIcon />
            </OrchestrationContainer>
            Tools & Technologies
            <OrchestrationContainer>
                <Devicon.GitHubDIcon />
                <Devicon.GitLabIcon />
                <Devicon.AWSIcon />
                <Devicon.JestIcon />
                <Devicon.WebpackIcon />
                <Devicon.LinuxIcon />
                <Devicon.JiraIcon />
                <Devicon.VSCodeIcon />
            </OrchestrationContainer>
        </Page>
    );
};

export default Skills;