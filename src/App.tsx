import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { COLORS } from "./constant/Colors";

const Wrapper = styled.div`
  background-color: ${COLORS.black2};
  padding: 0 135px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
