import { Linkedin, GitHub, Mail } from 'react-feather';
import styled from "styled-components";
import { motion } from 'framer-motion';

// import devicon icons individually to keep bundle size small
import ReactDevicon from "react-devicons/react/original-wordmark";
import Html5Devicon from 'react-devicons/html5/original-wordmark';
import CSS3Devicon from 'react-devicons/css3/original-wordmark';
import JavascriptDevicon from 'react-devicons/javascript/original';
import JQueryDevicon from 'react-devicons/jquery/original-wordmark';
import BootStrapDevicon from 'react-devicons/bootstrap/plain-wordmark';
import MUIDevicon from 'react-devicons/materialui/original';
import TailWindDevicon from 'react-devicons/tailwindcss/plain';

import NodeDevicon from 'react-devicons/nodejs/plain-wordmark';
import ExpressDevicon from 'react-devicons/express/original-wordmark';
import PHPDevicon from 'react-devicons/php/original';
import PostgresDevicon from 'react-devicons/postgresql/original-wordmark';
import MYSQLDevicon from 'react-devicons/mysql/original-wordmark';

import GitHubDevicon from 'react-devicons/github/original-wordmark';
import GitLabDevicon from 'react-devicons/gitlab/original-wordmark';
import AWSDevicon from 'react-devicons/amazonwebservices/original-wordmark';
import JestDevicon from 'react-devicons/jest/plain';
import WebpackDevicon from 'react-devicons/webpack/plain-wordmark';
import JiraDevicon from 'react-devicons/jira/plain-wordmark';
import VSCodeDevicon from 'react-devicons/vscode/original-wordmark';

// Feather Icons
export const LinkedInIcon = () => <Linkedin size={20} />;
export const GitHubIcon = () => <GitHub size={20} />;
export const MailIcon = () => <Mail size={20} />;

// Devicon Icons

// frontend
export const ReactIcon = () => <StyledIcon variants={item} ><ReactDevicon size={75} /></StyledIcon>;
export const HTMLIcon = () => <StyledIcon variants={item} ><Html5Devicon size={75} /></StyledIcon>;
export const CSSIcon = () => <StyledIcon variants={item} ><CSS3Devicon size={75} /></StyledIcon>;
export const JavascriptIcon = () => <StyledIcon variants={item} ><JavascriptDevicon size={75} /></StyledIcon>;
export const JQueryIcon = () => <StyledIcon variants={item} ><JQueryDevicon size={75} /></StyledIcon>;
export const BootStrapIcon = () => <StyledIcon variants={item} ><BootStrapDevicon size={75} /></StyledIcon>;
export const MUIIcon = () => <StyledIcon variants={item} ><MUIDevicon size={75} /></StyledIcon>;
export const TailwindIcon = () => <StyledIcon variants={item} ><TailWindDevicon size={75} /></StyledIcon>;

// backend
export const NodeIcon = () => <StyledIcon variants={item} ><NodeDevicon size={75} /></StyledIcon>;
export const ExpressIcon = () => <StyledIcon variants={item} ><ExpressDevicon size={75} /></StyledIcon>;
export const PHPIcon = () => <StyledIcon variants={item} ><PHPDevicon size={75} /></StyledIcon>;
export const PostgresIcon = () => <StyledIcon variants={item} ><PostgresDevicon size={75} /></StyledIcon>;
export const MYSQLIcon = () => <StyledIcon variants={item} ><MYSQLDevicon size={75} /></StyledIcon>;

// tools / technologiesexport const ReactIcon = () => <StyledIcon variants={item} ><ReactDevicon size={80} /></StyledIcon>;
export const GitHubDIcon = () => <StyledIcon variants={item} ><GitHubDevicon size={75} /></StyledIcon>;
export const GitLabIcon = () => <StyledIcon variants={item} ><GitLabDevicon size={75} /></StyledIcon>;
export const AWSIcon = () => <StyledIcon variants={item} ><AWSDevicon size={75} /></StyledIcon>;
export const JestIcon = () => <StyledIcon variants={item} ><JestDevicon size={75} /></StyledIcon>;
export const WebpackIcon = () => <StyledIcon variants={item} ><WebpackDevicon size={75} /></StyledIcon>;
export const JiraIcon = () => <StyledIcon variants={item} ><JiraDevicon size={75} /></StyledIcon>;
export const VSCodeIcon = () => <StyledIcon variants={item} ><VSCodeDevicon size={75} /></StyledIcon>;

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, y: 0},
};

const StyledIcon = styled(motion.span)`
    margin: 10px;
    display: flex;
`;