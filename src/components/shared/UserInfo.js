import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from "../app/constants";
import { motion } from "framer-motion";
import SelfIcon from "../../assets/self-icon.png";

const Section = styled(motion.div)`
    display: flex;
    flex-direction: ${props => props.isSmall && "row !important"};
    align-items: center;
    width: 100%;
    max-width: ${props => props.isSmall ? "100%" : "300px"};
    min-height: 100px;
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.theme.inversePrimary};
    background-color: ${props => props.theme.main}75;
    border-radius: 5px;
    color: ${props => props.theme.inversePrimary};
    font-family: ${props => props.theme.fontFamily};
`;

const Name = styled.div`
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 500;
`;

const Header = styled.div`
    font-size: ${props => props.theme.fontSize.md};
`;

const UserImage = styled.img`
    height: 80px;
    width: 80px;
    border: 2px solid ${props => props.theme.inversePrimary};
    border-radius: 50%;
    margin: 10px;
    display: flex;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserInfo = () => {
    const isSmallScreen = useMediaQuery({ query: SCREEN_SIZE.SMALL });

    return (
        <Section
            initial={{x: -500, opacity: .1}}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1}}
            isSmall={isSmallScreen}
        >
            <UserImage src={SelfIcon} />
            <Column>
                <Name>
                    Trey Shedrick
                </Name>
                <Header>
                    Software Developer
                </Header>
            </Column>
        </Section>
    );
};

export default UserInfo;