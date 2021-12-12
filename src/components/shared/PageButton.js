import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageButton = ({children, route, isDocument, link}) => {
    if(isDocument){
        return (
            <StyledAnchor href={link} target="_blank">
                <Button>{children}</Button>
            </StyledAnchor>
        );
    }
    return (
        <StyledLink to={route}>
            <Button>{children}</Button>
        </StyledLink>
    );
};

PageButton.propTypes = {
    children: PropTypes.node,
    route: PropTypes.string,
    isDocument: PropTypes.bool,
    link: PropTypes.string,
};

const Button = styled.button`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.secondary}05;
    color: ${props => props.theme.inversePrimary};
    border: 0;  
    border-radius: 0;
    font-family: ${props => props.theme.fontFamily};
    &:hover {
        opacity: .5;
        background-color: ${props => props.theme.inversePrimary}90;
        color: ${props => props.theme.primary};
        cursor: pointer;
    }
`;

const StyledAnchor = styled.a`
    width: 100%;
`;

const StyledLink = styled(Link)`
    width: 100%;
`;

export default PageButton;