import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = PropsWithChildren & HTMLAttributes<HTMLHeadingElement>;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${COLORS.gray};
`;

const Title = (props: Props) => {
  return <Paragraph {...props} />;
};

export default Title;
