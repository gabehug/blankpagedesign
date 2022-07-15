import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import seniorPhotos from "../../assets/seniorPhotos.jpg";
import portraits from "../../assets/portraits.jpg";
import anemnesisImg from "../../assets/anemnesisImg.jpg";
import PDL from "../../assets/PDL.jpg";
import groupShoots from "../../assets/groupShoots.jpg";
import track from "../../assets/track.jpg";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/logo";
import HorizontalScroll from "react-scroll-horizontal";
import { deviceSize } from "../../components/responsive";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin: 0em 4em
`;

const ImageContainer = styled.div`
  width: auto;
  height: auto;
  margin 0em 1em;
  display: flex; 
  flex-direction: column; 
  align-items: start;

  img {
    width: auto;
    height: 40em;
  }

  a {
    color:#A39450;
    text-decoration: none;
  }

  a:hover {
    color: #909E85;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        height: 20em;
      }
    }
`;

const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;

const BackButton = styled.button`
    width: 10em;
    height: 3em;
    position: relative;
    top: 30em;
    right: 12em;
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
        top: 18em;
        right: 12em;
    }
`;


export function Photography(props) {

  const scroll = {
    overflowX: 'visible',
    
  }
  return (
    <PageContainer>
      <Background>
      <HorizontalScroll reverseScroll style={scroll} >
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <ImageContainer>
            <h1>Senior Photos</h1>
            <img src= {seniorPhotos} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Portraits</h1>
            <img src= {portraits} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1><a href="https://www.poncedleon.com/" target="blank">PDL</a> by Seb</h1>
            <img src= {PDL} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Anemnesis</h1>
            <img src= {anemnesisImg} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Group Shoots</h1>
            <img src= {groupShoots} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Track</h1>
            <img src= {track} alt="logo"/>
          </ImageContainer>
          <BackButton><a href="/photography">Go Back</a></BackButton>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}
