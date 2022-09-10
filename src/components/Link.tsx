import React from "react";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = (props: Props) => {
  return <Anchor {...props} />;
};

const Anchor = styled.a`
  text-decoration: none;
  appearance: none;
  color: ${COLORS.gray};
`;

export default Link;
