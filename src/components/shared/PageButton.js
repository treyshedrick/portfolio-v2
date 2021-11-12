import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
  
const Button = styled.button`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.main}90;
    color: ${props => props.theme.inversePrimary};
    border: 0;  
    border-radius: 0;
    font-family: ${props => props.theme.fontFamily};
    &:hover {
        opacity: .5;
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    width: 100%;
`;

const PageButton = ({children, route}) => {
    return (
        <StyledLink to={route}>
            <Button>{children}</Button>
        </StyledLink>
    );
};

export default PageButton;