import React from "react";
import styled from "styled-components";
import { Union } from "../assets";
import { COLORS } from "../constant/Colors";
import DefaultHeading from "./Heading";
import LinearHeading from "./LinearHeading";

const Section = styled.section`
  display: flex;
  gap: 70px;
  flex-direction: column;
`;

const Heading = styled(DefaultHeading)`
  width: 35%;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Img = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 6px;
`;

const Figcaption = styled.figcaption`
  font-weight: 600;
  font-size: 20px;
  color: ${COLORS.white};
`;

const Features = () => {
  return (
    <Section>
      <Heading>
        More Than Just A Background <LinearHeading>Remover</LinearHeading>
      </Heading>
      <ImgWrapper>
        <Figure>
          <Img src={require("../assets/original.png")} />
          <Figcaption>Original</Figcaption>
        </Figure>
        <Union />
        <Figure>
          <Img src={require("../assets/removedBackground.png")} />
          <Figcaption>Removed Background</Figcaption>
        </Figure>
        <Union />
        <Figure>
          <Img src={require("../assets/newBackground.png")} />
          <Figcaption>New Background</Figcaption>
        </Figure>
        <Union />
        <Figure>
          <Img src={require("../assets/customBackground.png")} />
          <Figcaption>Design as you want</Figcaption>
        </Figure>
      </ImgWrapper>
    </Section>
  );
};

export default Features;
