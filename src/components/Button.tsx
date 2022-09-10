import React from "react";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  return <Wrapper {...props} />;
};

const Wrapper = styled.button`
  appearance: none;
  border: none;
  outline: none;
  padding: 8px 28px;
  color: ${COLORS.white};
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
`;

export default Button;
