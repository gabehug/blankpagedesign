import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import redlineIMG from "../../photos/redlineIMG.png";
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";


const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
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
  width: auto;
  display: flex;
  align-items: center;

`;

const InformationContainer = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4em;
`;

const ScrollContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: end;
  

  img {
    width: 3em;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 1050em;
  height: auto;
  margin: 2em;
  display: flex;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function Redline(props) {
  return (
    <PageContainer>
      <Background>
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer>
            <h1>Red Line</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <RenderSmoothImage src= {redlineIMG} alt="logo"/>
          </ImageContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}