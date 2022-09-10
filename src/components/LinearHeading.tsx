import { PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = PropsWithChildren;

const LinearHeading = ({ children }: Props) => {
  return (
    <Wrapper>
      <div
        style={{
          background: COLORS.black2,
          padding: "0 4px",
          display: "inline-block",
        }}
      >
        <H1>{children}</H1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(89.86deg, #ff4040 61.82%, #ac00fd 89.91%);
  display: inline-block;
  padding: 2px;
`;

const H1 = styled.h1`
  font-weight: inherit;
  font-size: inherit;
  background: linear-gradient(89.86deg, #ff4040 61.82%, #ac00fd 89.91%);
  color: transparent;
  -webkit-background-clip: text;
`;

export default LinearHeading;
