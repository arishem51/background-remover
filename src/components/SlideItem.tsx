import styled from "styled-components";
import { Star } from "../assets";
import { COLORS } from "../constant/Colors";
import DefaultTitle from "./Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px;
  background-color: ${COLORS.black};
  flex: 1;
  border-radius: 8px;
  gap: 28px;
`;

const Contact = styled.div`
  display: flex;
  gap: 22px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.p`
  color: ${COLORS.white};
  text-transform: capitalize;
`;

const WrapperTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Elippse = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(90deg, #ff4040 0%, #ac00fc 100%);
`;

const Title = styled(DefaultTitle)`
  font-size: 14px;
  width: 90%;
`;

const Fingure = styled.figure`
  width: 76px;
  height: 76px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const StarWrap = styled.div`
  display: flex;
  gap: 7px;
  padding-top: 10px;
`;

const SlideItem = () => {
  return (
    <Wrapper>
      <Contact>
        <Fingure>
          <Img src={require("../assets/about.png")} />
        </Fingure>
        <TextWrap>
          <Name>Mark wood</Name>
          <WrapperTitle>
            <Elippse />
            <Title>Web Designer</Title>
          </WrapperTitle>
        </TextWrap>
      </Contact>
      <Title>
        We are very impressed with the values and removing method. In
        particular, we don’t use any other tools for removing image and make
        transparent it .
      </Title>
      <StarWrap>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarWrap>
    </Wrapper>
  );
};

export default SlideItem;
