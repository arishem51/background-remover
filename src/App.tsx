import React from "react";
import styled from "styled-components";
import EachSteps from "./components/EachSteps";
import Example from "./components/Example";
import Features from "./components/Features";
import Header from "./components/Header";
import Plugins from "./components/Plugins";
import RemoveTheBackground from "./components/RemoveTheBackground";
import { BackgroundSpace } from "./components/Space";
import { COLORS } from "./constant/Colors";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

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
      <Features />
      <BackgroundSpace size={170} />
      <Example />
      <BackgroundSpace size={170} />
      <Plugins />
      <BackgroundSpace size={170} />
      <About />
      <BackgroundSpace size={170} />
      <GetStarted />
      <BackgroundSpace size={100} />
      <Footer />
    </Wrapper>
  );
}

export default App;
