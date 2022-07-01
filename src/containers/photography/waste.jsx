import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import waste from "../../photos/waste.jpg";
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";
import HorizontalScroll from "react-scroll-horizontal";
import { deviceSize } from "../../components/responsive";


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

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0em 0em 0em 1em;
  }
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

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      width: 14em; 
      h1 {
        font-size: 1.5em;
      }

      p {
        font-size 1.2em;
      }

      h4 {
        font-size: 1em;
      }
    }


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

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
     img {
      width: 2em;
     }
    }
`;

const ImageContainer = styled.div`
  width: auto;
  height: 45em;
  margin: 2em;
  display: flex;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function Waste(props) {
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
          <InformationContainer>
            <h1>Waste</h1>
            <p>The following images are a small piece of evidence in a much larger case against how we treat our planet. This trash is a visible reminder that surrounds us, reminding us of the waste that we create. </p>
            <p>The following were taken in the Wrigleyville neighborhood of Chicago. </p>
            <h4>Fuji x100t | Canon EOS R</h4>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <img src= {waste} alt="logo"/>
          </ImageContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}