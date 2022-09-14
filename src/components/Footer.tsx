import styled from "styled-components";
import { Facebook, LinkedIn, MainIcon, Twitter } from "../assets";
import Heading from "./Heading";
import Language from "./Language";
import Title from "./Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContent = styled.footer`
  display: flex;
  padding-bottom: 39px;
  justify-content: space-between;
  & > div {
    flex: 1;
  }
`;

const TextHead = styled(Heading)``;

const TextTitle = styled(Title)``;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${TextTitle} {
    flex: 1;
    width: 50%;
  }
  align-items: flex-start;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Doc = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  ${TextHead} {
    font-size: 22px;
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Icons = styled.div`
  display: flex;
  gap: 14px;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #171820;
`;

const CopyRight = styled(Title)`
  padding: 38px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <Left>
          <MainIcon />
          <TextTitle>
            Remove background from images of humans, animals or objects and
            download high-resolution images for free.
          </TextTitle>
          <Language />
        </Left>
        <Right>
          <Doc>
            <Col>
              <TextHead>Tools & API</TextHead>
              <TextTitle>API Documentation</TextTitle>
              <TextTitle>Integrations, tools & apps</TextTitle>
              <TextTitle>Photoshop Extension</TextTitle>
              <TextTitle>Windows / Mac / Linux</TextTitle>
              <TextTitle>Android App</TextTitle>
              <TextTitle>Design Templates</TextTitle>
            </Col>
            <Col>
              <TextHead>Support</TextHead>
              <TextTitle>Help & FAQs</TextTitle>
              <TextTitle>Contact us</TextTitle>
              <TextTitle>Refunds</TextTitle>
              <TextTitle>Platform Status</TextTitle>
            </Col>
            <Col>
              <TextHead>Company</TextHead>
              <TextTitle>Blog</TextTitle>
              <TextTitle>Affiliate Program</TextTitle>
              <TextTitle>Video Background Removal</TextTitle>
              <TextTitle>Careers</TextTitle>
              <TextTitle>About us</TextTitle>
              <TextTitle>Press</TextTitle>
              <TextTitle>Pricing</TextTitle>
            </Col>
          </Doc>
          <Icons>
            <Facebook />
            <LinkedIn />
            <Twitter />
          </Icons>
        </Right>
      </FooterContent>
      <Divider />
      <CopyRight>Copyright @UIHUT 2022</CopyRight>
    </Wrapper>
  );
};

export default Footer;
