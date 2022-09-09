import { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren & HTMLAttributes<HTMLElement>;

const NavBar = (props: Props) => {
  return <nav {...props} />;
};

export default NavBar;
