import { HTMLAttributes, ReactElement } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/Colors";

type Props = {
  logo: ReactElement;
  title: string;
} & HTMLAttributes<HTMLDivElement>;

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${COLORS.black};
  padding: 48px 0;
  min-width: 270px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: ${COLORS.white};
`;

const PluginItem = ({ title, logo, ...props }: Props) => {
  return (
    <Warpper {...props}>
      {logo}
      <Text>{title}</Text>
    </Warpper>
  );
};

export default PluginItem;
