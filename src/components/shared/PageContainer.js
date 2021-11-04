import styled from "styled-components";

const PageContainer = styled.div`
    background-color: ${props => props.theme.primary};
    width: 50%;
    display: flex;
    flex-direction: row;
`;

export default PageContainer;