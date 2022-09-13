import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 42px;
  color: ${COLORS.white};
`;

const Heading = (props: Props) => {
  return <H1 {...props} />;
};

export default Heading;
