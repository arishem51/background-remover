import styled from "styled-components";
import { COLORS } from "../constant/Colors";
import Heading from "./Heading";
import LinearGradientButton from "./LinearGradientButton";
import LinearHeading from "./LinearHeading";
import Title from "./Title";

const Section = styled.section`
  background-color: ${COLORS.black};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  gap: 20px;
`;

const HeadingCenter = styled(Heading)`
  text-align: center;
  width: 50%;
`;

const TitleCenter = styled(Title)`
  text-align: center;
  width: 50%;
`;

const Button = styled(LinearGradientButton)`
  padding: 15px 35px;
  margin-top: 20px;
`;

const GetStarted = () => {
  return (
    <Section>
      <HeadingCenter>
        Ready to <LinearHeading>remove</LinearHeading> the background of your
        image?
      </HeadingCenter>
      <TitleCenter>
        Remove background from images of humans, animals or objects and download
        high-resolution images for free.
      </TitleCenter>
      <Button>Get Started Now</Button>
    </Section>
  );
};

export default GetStarted;
