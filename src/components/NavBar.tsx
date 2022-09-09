import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

type Props = PropsWithChildren & HTMLAttributes<HTMLElement>;

const NavBar = (props: Props) => {
  return <Wrapper {...props} />;
};

const Wrapper = styled.nav`
  display: flex;
  gap: 42px;
`;

export default NavBar;
