import { Fragment } from "react";
import styled from "styled-components";
import { MainIcon } from "../assets";
import Button from "./Button";
import LinearGradientButton from "./LinearGradientButton";
import Link from "./Link";
import NavBar from "./NavBar";
import { BackgroundSpace } from "./Space";

const Header = () => {
  return (
    <Fragment>
      <BackgroundSpace size={42} />
      <Wrapper>
        <MainIcon />
        <NavBar>
          <Link href="#how">How to use</Link>
          <Link href="#tool">Tools $ API</Link>
          <Link href="#price">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </NavBar>
        <ButtonWrapper>
          <Button>Log In</Button>
          <LinearGradientButton>Sign Up</LinearGradientButton>
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div``;

export default Header;
