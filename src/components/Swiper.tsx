import { Swiper as DefaultSwiper, SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";
import { Pagination } from "swiper";
import styled from "styled-components";
import { BackgroundSpace } from "./Space";
import Heading from "./Heading";
import LinearHeading from "./LinearHeading";
import { useLayoutEffect, useRef, useState } from "react";
import SwiperButton from "./SwiperButton";

const Wrapper = styled(DefaultSwiper)`
  .swiper-slide {
    width: 100%;
    display: flex;
    gap: 96px;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 9px;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    width: 24px;
    height: 4px;
    background-color: #5b5d67;
    border-radius: 2px;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background: linear-gradient(90deg, #ff4040 0%, #ac00fd 100%);
  }
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
`;

const HeadingText = styled(Heading)`
  width: 50%;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 24px;
`;

const Swiper = () => {
  const [headingHeight, setHeadingHeigt] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log(ref.current?.clientHeight);
    if (!!ref?.current?.clientHeight && ref.current?.clientHeight > 0) {
      setHeadingHeigt(ref.current?.clientHeight);
    }
  }, []);

  return (
    <Wrapper
      spaceBetween={50}
      style={{ width: "100%", paddingTop: `calc(${headingHeight}px + 100px)` }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className}" ></div>`;
        },
      }}
      modules={[Pagination]}
    >
      <WrapperText ref={ref}>
        <HeadingText>
          What our loving users are saying{" "}
          <LinearHeading>about us</LinearHeading>
        </HeadingText>
        <ButtonWrap>
          <SwiperButton.Previous />
          <SwiperButton.Next />
        </ButtonWrap>
      </WrapperText>
      <SwiperSlide>
        <SlideItem />
        <SlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem />
        <SlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem />
        <SlideItem />
      </SwiperSlide>
      <BackgroundSpace size={55} />
    </Wrapper>
  );
};

export default Swiper;
