import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = {
  size: number;
};

const Space = (props: Props) => {
  return <Wrapper size={props.size} />;
};

const Wrapper = styled.div<Props>`
  padding-top: ${(props) => props.size + "px"};
`;

export const BackgroundSpace = styled(Space)`
  background-color: ${COLORS.black2};
`;

export default Space;
