import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
  
const Button = styled.button`
    height: 100%;
    width: 100%;
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