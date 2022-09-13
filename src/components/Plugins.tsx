import { ReactElement } from "react";
import styled from "styled-components";
import { Adobe, Figma, Sketch, Woocommerce } from "../assets";
import Heading from "./Heading";
import LinearGradientButton from "./LinearGradientButton";
import LinearHeading from "./LinearHeading";
import PluginItem from "./PluginItem";
import { BackgroundSpace } from "./Space";
import Title from "./Title";

const PLUGINITEMS: { title: string; logo: ReactElement }[] = [
  {
    title: "Figma",
    logo: <Figma />,
  },
  {
    title: "Adobe XD",
    logo: <Adobe />,
  },
  {
    title: "Sketch",
    logo: <Sketch />,
  },
  {
    title: "Woocommerce",
    logo: <Woocommerce />,
  },
];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 50%;
  p,
  h1 {
    text-align: center;
  }
  gap: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Button = styled(LinearGradientButton)`
  padding: 15px 35px;
`;

const Plugins = () => {
  return (
    <Section>
      <TextWrapper>
        <Heading>
          Speed up Your Workflow With Our{" "}
          <LinearHeading>Integrations</LinearHeading>
        </Heading>
        <Title>
          Remove background from images of humans, animals or objects and
          download high-resolution images for free.
        </Title>
      </TextWrapper>
      <BackgroundSpace size={70} />
      <ItemWrapper>
        {PLUGINITEMS.map((item) => (
          <PluginItem {...item} key={item.title} />
        ))}
      </ItemWrapper>
      <BackgroundSpace size={55} />
      <Button>See All Plugins</Button>
    </Section>
  );
};

export default Plugins;
