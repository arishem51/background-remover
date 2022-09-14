import styled from "styled-components";
import { DownArrow, English } from "../assets";
import { COLORS } from "../constant/Colors";
import Title from "./Title";

const BackgroundLinear = styled.div`
  background: linear-gradient(89.86deg, #ff4040 61.82%, #ac00fd 89.91%);
  border-radius: 8px;
  padding: 1px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.black};
  border-radius: 8px;
  gap: 7px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Language = () => {
  return (
    <BackgroundLinear>
      <Wrapper>
        <English />
        <Title>English</Title>
        <DownArrow />
      </Wrapper>
    </BackgroundLinear>
  );
};

export default Language;
