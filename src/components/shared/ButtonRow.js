import styled from "styled-components";
import PageButton from "./PageButton";
import { ROUTES } from "../app/constants";

const Row = styled.div`
    display: flex;
    flex-direction: row !important;
    height: 50px;
    width: 100%;
    border-bottom: 2px solid ${props => props.theme.inversePrimary};
`;

const ButtonRow = () => {
    return(
        <Row>
            <PageButton route={ROUTES.HOME}>About Me</PageButton>
            <PageButton route={ROUTES.PROJECTS}>Projects</PageButton>
            <PageButton route={ROUTES.SKILLS}>Skills</PageButton>
            <PageButton route={ROUTES.CONTACT}>Contact</PageButton>
        </Row>
    );
};

export default ButtonRow;