import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import redlineIMG from "../../photos/redlineIMG.png";
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";
import image1 from "../../photos/image1.jpg";
import HorizontalScroll from "react-scroll-horizontal";


const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
const MenuContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0em 2em;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 2em;

  image {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const InformationContainer = styled.div`
  width: auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin: 4em;
`;

const ScrollContainer = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  justify-content: end;
  img {
    width: 3em;
    height: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 40em;
  height 20em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export function WebDesign(props) {
  return (
    <PageContainer>
      <Background>
      <HorizontalScroll reverseScroll>
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer id="hcg">
            <h1>Hug Human Capital Group</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ImgContainer>
              <img src={image1}></img>
            </ImgContainer>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <InformationContainer id="dons">
            <h1>Crypto Dons</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ImgContainer>
              <img src={image1}></img>
            </ImgContainer>
          </InformationContainer>
          <InformationContainer id="chain">
            <h1>Chainlinks</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ImgContainer>
              <img src={image1}></img>
            </ImgContainer>
          </InformationContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}