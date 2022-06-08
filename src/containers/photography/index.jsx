import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import fading1 from "../../photos/fading1.png";
import fading2 from "../../photos/fading2.png";
import fading3 from "../../photos/fading3.png";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/logo";
import scrollIndi from "../../assets/scrollIndi.png";

import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

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
  width: 600em;
  height: auto;
  margin 2em;
  display: flex; 
  flex-direction: row; 
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;


export function Photography(props) {
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
            <h1>The Fading Landscape</h1>
            <p>This is an artists statement about how this is all about nature 
and humans are fucking up the planet and yay thats all that
I have for you today, that is my statement. I would need to add 
more actual information here about where it was Show and
all of that other shit, what camera I was using, but for now this
looks good. I just need something here! </p>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <RenderSmoothImage src= {fading1} alt="logo"/>
            <RenderSmoothImage src= {fading2} alt="logo"/>
            <RenderSmoothImage src= {fading3} alt="logo"/>
          </ImageContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}