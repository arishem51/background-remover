import React from "react";
import styled from "styled-components";
import { Upload } from "../assets";
import { COLORS } from "../constant/Colors";
import Heading from "./Heading";
import LinearGradientButton from "./LinearGradientButton";
import LinearHeading from "./LinearHeading";
import { BackgroundSpace } from "./Space";
import Title from "./Title";

const Section = styled.section`
  display: flex;
  background-color: ${COLORS.black2};
`;

const Figure = styled.figure`
  position: relative;
  flex: 1;
  isolation: isolate;
`;

const Img = styled.img`
  position: absolute;
  border-radius: 4px;
`;

const SmallImg = styled(Img)`
  height: 148px;
  width: 148px;
  z-index: 2;
`;

const LeftImg = styled(SmallImg)`
  bottom: 0;
  left: 0;
`;

const RightImg = styled(SmallImg)`
  top: 0;
  left: 320px;
`;

const BigImg = styled(Img)`
  height: 362px;
  width: 320px;
  top: 50%;
  transform: translate(0, -50%);
  left: calc(148px / 2);
  z-index: 1;
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LargeHeading = styled(Heading)`
  font-size: 66px;
`;

const UploadButton = styled(LinearGradientButton)`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 35px;
`;

const RemoveTheBackground = () => {
  return (
    <Section>
      <Figure>
        <LeftImg src={require("../assets/Left-background-remove.png")} />
        <BigImg src={require("../assets/Middle-background-remove.png")} />
        <RightImg src={require("../assets/Right-background-remove.png")} />
      </Figure>
      <TextContent>
        <LargeHeading>
          Remove the background from images for{" "}
          <LinearHeading>free.</LinearHeading>
        </LargeHeading>
        <BackgroundSpace size={20} />
        <Title>
          Remove background from images of humans, animals or objects and
          download high-resolution images for free.
        </Title>
        <BackgroundSpace size={40} />
        <UploadButton>
          <Upload /> Upload Image
        </UploadButton>
        <BackgroundSpace size={25} />
        <Title>Drop an image or paste URL</Title>
      </TextContent>
    </Section>
  );
};

export default RemoveTheBackground;
