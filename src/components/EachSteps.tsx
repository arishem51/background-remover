import React from "react";
import styled from "styled-components";
import { Card1, Card2, Card3 } from "../assets";
import { COLORS } from "../constant/Colors";
import Card from "./Card";
import LinearHeading from "./LinearHeading";
import { BackgroundSpace } from "./Space";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-weight: 800;
  font-size: 42px;
  text-align: center;
  color: ${COLORS.white};
`;

const Title = styled.p`
  color: ${COLORS.gray};
  font-size: 18px;
  text-align: center;
`;

const TextWrapper = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 52px;
`;

const CardItem = styled(Card)`
  flex: 1;
`;

const EachSteps = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Heading>
          <LinearHeading>Easy steps</LinearHeading> to remove a image background
        </Heading>
        <Title>
          Remove background from images of humans, animals or objects and
          download high-resolution images for free.
        </Title>
      </TextWrapper>
      <BackgroundSpace size={70} />
      <CardWrapper>
        <CardItem
          icon={<Card1 width={48} height={48} />}
          title="For best results, choose an image where the subject has clear edges with nothing overlapping"
          heading="Upload Image"
        />
        <CardItem
          icon={<Card2 width={48} height={48} />}
          title="Upload your image to automatically remove the background in an instant."
          heading="Remove background"
        />
        <CardItem
          icon={<Card3 width={48} height={48} />}
          title="Download your new image as a PNG file with a transparent background to save, share, or keep editing."
          heading="Download Image"
        />
      </CardWrapper>
    </Wrapper>
  );
};

export default EachSteps;
