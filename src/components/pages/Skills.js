import React from "react";
import Page from "../shared/Page";
import { ReactIcon, HTMLIcon, CSSIcon, JavascriptIcon, JQueryIcon, BootStrapIcon, MUIIcon } from "../shared/Icons";
import OrchestrationContainer from "../shared/OrchestrationContainer";

const Skills = () => {
    return (
        <Page>
            Front-End Development
            <OrchestrationContainer>
                <ReactIcon />
                <HTMLIcon />
                <CSSIcon />
                <JavascriptIcon />
                <JQueryIcon />
                <BootStrapIcon />
                <MUIIcon />
            </OrchestrationContainer>
        </Page>
    );
};

export default Skills;