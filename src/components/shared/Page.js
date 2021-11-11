import React from "react";
import ButtonRow from "../shared/ButtonRow";
import styled from "styled-components";

const RouteContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


const RoutePage = styled.div`
    width: 100%;
    height: 100%;
`;

const Page = ({children}) => {
    return(
        <RouteContainer>
            <ButtonRow />
            <RoutePage>{children}</RoutePage>
        </RouteContainer>
    );
};

export default Page;