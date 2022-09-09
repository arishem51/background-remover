import styled from "styled-components";
import { MainIcon } from "../assets";
import Link from "./Link";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Wrapper>
      <MainIcon />
      <NavBar>
        <Link href="#how">How to use</Link>
        <Link href="#tool">Tools $ API</Link>
        <Link href="#price">Pricing</Link>
        <Link href="#contact">Contact</Link>
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.header``;

export default Header;
