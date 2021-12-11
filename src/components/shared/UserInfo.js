import styled from "styled-components";
import { motion } from "framer-motion";
import SelfIcon from "../../assets/self-icon.png";
import { useIsSmallScreen } from "../app/hooks";
import ContactButton from "./ContactButton";
import { LINKS } from "../app/constants";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./Icons";
import { LABELS } from "../app/constants";

const UserInfo = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <Section
            initial={{x: -1000, opacity: .01}}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1}}
            isSmall={isSmallScreen}
        >
            <UserImage isSmall={isSmallScreen} src={SelfIcon} />
            <DynamicFlexBox>
                <Column>
                    <Name>
                        Trey Shedrick
                    </Name>
                    <Header isSmall={isSmallScreen}>
                        Software Developer {!isSmallScreen && "passionate about making web and mobile applications"}
                    </Header>
                    <Header isSmall={isSmallScreen}>
                        📍  Houston, Texas
                    </Header>
                </Column>
                <ContactFlexBox isSmall={isSmallScreen}>
                    <ContactButton icon={<LinkedInIcon />} text={LABELS.LINKEDIN} src={LINKS.LINKEDIN} />
                    <ContactButton icon={<GitHubIcon />} text={LABELS.GITHUB} src={LINKS.GITHUB}/>
                    <ContactButton icon={<MailIcon />} text={LABELS.EMAIL} src={LINKS.EMAIL}/>
                </ContactFlexBox>
            </DynamicFlexBox>
        </Section>
    );
};

const Section = styled(motion.div)`
    display: flex;
    flex-direction: ${props => props.isSmall && "row !important"};
    align-items: center;
    justify-content: ${props => props.isSmall && "center"};
    width: 100%;
    max-width: ${props => props.isSmall ? "100%" : "300px"};
    height: ${props => props.isSmall ? "150px" : "90%"};
    max-height: ${props => props.isSmall ? null : "750px"};
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.theme.inversePrimary};
    background-color: ${props => props.theme.main}40;
    border-radius: 5px;
    color: ${props => props.theme.inversePrimary};
    font-family: ${props => props.theme.fontFamily};
    padding: 2px;
    ${({ isSmall }) => !isSmall && `
        padding-top: 50px;
    `}
    overflow-x: auto;
`;

const Name = styled.div`
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 500;
`;

const Header = styled.div`
    font-size: ${props => props.theme.fontSize.md};
    margin: ${props => props.isSmall ? "0px": "10px"};
    text-align: center;
`;

const UserImage = styled.img`
    height: ${props => props.isSmall ? "80px": "150px"};
    width: ${props => props.isSmall ? "80px": "150px"};
    border: 2px solid ${props => props.theme.inversePrimary};
    border-radius: 50%;
    margin: 10px 0px;
    display: flex;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DynamicFlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.isSmall ? "row !important" : "column"};
`;

const ContactFlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.isSmall ? "row !important" : "column"};
    align-items: center;


    ${({ isSmall }) => !isSmall && `
        justify-content: space-between;
        height: 80px;
        margin: 20px;
  `}
`;

export default UserInfo;