import React from "react";
import styled from "styled-components";
import Page from "../shared/Page";

const Header = styled.div`
    font-size: ${props => props.theme.fontSize.xl};
    margin: ${props => props.isSmall ? "0px": "10px"};
`;

const AboutMe = styled.div`
    font-size: ${props => props.theme.fontSize.lg};
    margin: ${props => props.isSmall ? "5px": "20px"};
    text-align: center;
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <Page>
            <Center>
                <Header>Hello!</Header>
                <AboutMe>
                    I am a full-stack software developer with a degree in Management Information Systems from the University of Houston.
                </AboutMe>
                <AboutMe>
                    I specialize in using Javascript and frameworks including React, React Native, and Node.js. I enjoy making functional, well designed mobile and web applications.
                </AboutMe>
            </Center>
        </Page>
    );
};

export default Home;