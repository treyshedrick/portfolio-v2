import { Linkedin, GitHub, Mail } from 'react-feather';
import styled from "styled-components";
import { motion } from 'framer-motion';

// import devicon icons individually to keep bundle size small
import ReactDevicon from "react-devicons/react/original-wordmark";
import Html5Devicon from 'react-devicons/html5/original-wordmark';
import CSS3Devicon from 'react-devicons/css3/original-wordmark';
import JavascriptDevicon from 'react-devicons/javascript/original';
import JQueryDevicon from 'react-devicons/jquery/original-wordmark';
import BootStrapDevicon from 'react-devicons/bootstrap/original';
import MUIDevicon from 'react-devicons/materialui/original';

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: -1000 },
};

const StyledIcon = styled(motion.span)`
    margin: 10px;
`;

// Feather Icons
export const LinkedInIcon = () => <Linkedin size={20} />;
export const GitHubIcon = () => <GitHub size={20} />;
export const MailIcon = () => <Mail size={20} />;

// Devicon Icons
export const ReactIcon = () => <StyledIcon variants={item} ><ReactDevicon size={80} /></StyledIcon>;
export const HTMLIcon = () => <StyledIcon variants={item} ><Html5Devicon size={80} /></StyledIcon>;
export const CSSIcon = () => <StyledIcon variants={item} ><CSS3Devicon size={80} /></StyledIcon>;
export const JavascriptIcon = () => <StyledIcon variants={item} ><JavascriptDevicon size={80} /></StyledIcon>;
export const JQueryIcon = () => <StyledIcon variants={item} ><JQueryDevicon size={80} /></StyledIcon>;
export const BootStrapIcon = () => <StyledIcon variants={item} ><BootStrapDevicon size={80} /></StyledIcon>;
export const MUIIcon = () => <StyledIcon variants={item} ><MUIDevicon size={80} /></StyledIcon>;