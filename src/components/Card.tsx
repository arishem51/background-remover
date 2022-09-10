import { HTMLAttributes, ReactElement } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = {
  icon: ReactElement;
  title: string;
  heading: string;
} & HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  background-color: ${COLORS.black};
  padding: 28px;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 22px;
  color: ${COLORS.white};
`;

const Title = styled.p`
  color: ${COLORS.gray};
`;

const Card = ({ icon, title, heading, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      {icon}
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Title>{title}</Title>
      </TextWrapper>
    </Wrapper>
  );
};

export default Card;
