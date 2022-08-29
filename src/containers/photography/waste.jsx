import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import { PageContainer } from "../../components/pageContainer";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { Footer } from "../../components/footer";
import { deviceSize } from "../../components/responsive";
import waste from "../../assets/photos/waste.jpg";
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
  align-items: center;


  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
     img {
      height: 30em;
     }
    }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BackButton = styled.button`
    width: 10em;
    height: 3em;
    position: relative;
    top: 30em;
    right: 17em;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid black;

    a {
      text-decoration: none;
      font-family: futura;
      font-size: 1.25em;
      color: black;
    }

    :hover {
      background-color: #A39450;
      border: 0px;
    }

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        top: 21em;
        right: 15.5em;
    }

`;

export function Waste(props) {
  const scroll = {
    overflowX: 'visible',
  }
  return (
    <PageContainer>
      <Background>
      <HorizontalScroll reverseScroll style={scroll}>
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer>
            <h1>Waste</h1>
            <p>Plastics are often seen as an aesthetic problem as we see more and more single-use plastics and waste in our streets. This excess waste is just a small part of the plastics issue. Today plastics are chock-full of chemicals meant to improve people's lives and create convenience. These chemicals are often toxic and have health side effects even at extremely low concentrations. The chemicals are spread into our soil, water supply, and even the air as plastics are discarded and broken down. These images are a small reminder of how plastics and chemicals permeate our everyday lives. </p>
            <h4>Fuji x100t | Canon EOS R</h4>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <img src= {waste} alt="logo"/>
          </ImageContainer>
          <BackButton><a href="/photography/waste">Go Back</a></BackButton>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}