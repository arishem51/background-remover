import React from "react";
import styled from "styled-components";
import EachSteps from "./components/EachSteps";
import Header from "./components/Header";
import RemoveTheBackground from "./components/RemoveTheBackground";
import { BackgroundSpace } from "./components/Space";
import { COLORS } from "./constant/Colors";

const Wrapper = styled.div`
  background-color: ${COLORS.black2};
  padding: 0 135px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <BackgroundSpace size={88} />
      <RemoveTheBackground />
      <BackgroundSpace size={158} />
      <EachSteps />
      <BackgroundSpace size={170} />
    </Wrapper>
  );
}

export default App;
