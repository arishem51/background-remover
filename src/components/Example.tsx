import styled from "styled-components";
import { COLORS } from "../constant/Colors";
import LinearGradientButton from "./LinearGradientButton";
import LinearHeading from "./LinearHeading";

const Section = styled.section`
  display: flex;
  background-color: ${COLORS.black};
  padding: 100px 135px;
  gap: 135px;
  justify-content: space-between;
  margin: 0 -135px;
`;

const Figure = styled.figure`
  min-width: 470px;
  width: 470px;
  min-height: 470px;
`;

const Img = styled.img`
  width: 100%;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 45%;
`;

const Heading = styled.h1`
  font-weight: 800;
  font-size: 42px;
  color: ${COLORS.white};
`;

const Title = styled.p`
  color: ${COLORS.gray};
`;

const Button = styled(LinearGradientButton)`
  padding: 12px 30px;
`;

const Example = () => {
  return (
    <Section>
      <Figure>
        <Img src={require("../assets/example.png")} />
      </Figure>
      <TextContent>
        <Heading>
          Free <LinearHeading>online tool</LinearHeading> to backgrounds remove
          easily
        </Heading>
        <Title>
          Our AI background remover can automatically detect the subject at once
          from any photo, remove bg in smooth cutout way without any manul work.
        </Title>
        <Title>
          With artificial intelligence tool, it's easy to handling hair, animal
          fur or any complex edges in a few seconds. Save your time and energy
          to make high quality transparent PNG or add the white background to
          photo.
        </Title>
        <Button>Get Started</Button>
      </TextContent>
    </Section>
  );
};

export default Example;
