import styled from "styled-components";
import { useSwiper } from "swiper/react";
import { LeftArrow, RightArrow } from "../assets";
import { COLORS } from "../constant/Colors";

const Wrapper = styled.button`
  width: 54px;
  height: 54px;
  background: linear-gradient(90deg, #ff4040 0%, #ac00fd 100%);
  border-radius: 4px;
  cursor: pointer;
  padding: 1px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Next = () => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (swiper.activeIndex === 2) {
      swiper.slideTo(0);
      return;
    }
    swiper?.slideNext();
  };

  return (
    <Wrapper onClick={handleClick}>
      <Background style={{ background: "inherit" }}>
        <RightArrow />
      </Background>
    </Wrapper>
  );
};

const Previous = () => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (swiper.activeIndex === 0) {
      swiper.slideTo(2);
      return;
    }
    swiper?.slidePrev();
  };

  return (
    <Wrapper onClick={handleClick}>
      <Background>
        <LeftArrow />
      </Background>
    </Wrapper>
  );
};

const SwiperButton = {
  Next,
  Previous,
};

export default SwiperButton;
