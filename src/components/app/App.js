import React from "react";
import styled from "styled-components";
import Routes from "./Routes";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;

function App() {
    return (
        <AppContainer><Routes /></AppContainer>
    );
}

export default App;
