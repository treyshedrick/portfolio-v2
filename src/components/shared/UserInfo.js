import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from "../app/constants";

const Section = styled.div`
    width: 100%;
    max-width: ${props => props.isSmall ? "100%" : "300px"};
    min-height: 100px;
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.theme.inversePrimary};
    background-color: ${props => props.theme.main};
    border-radius: 5px;
`;

const Name = styled.div`
`;

const UserInfo = () => {
    const isSmallScreen = useMediaQuery({ query: SCREEN_SIZE.SMALL });

    return (
        <Section isSmall={isSmallScreen}>
            <Name>
                Trey Shedrick
            </Name>
        </Section>
    );
};

export default UserInfo;