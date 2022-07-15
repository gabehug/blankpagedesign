import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import temp from "../../assets/temp.webp";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/logo";
import scrollIndi from "../../assets/scrollIndi.png";
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
  margin 4em 0em;
  display: flex; 
  flex-direction: column; 
  align-items: start;

  img {
    width: 50em;
    height: auto;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        width: 300em;
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
    right: 20em;
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
        top: 15em;
        right: 16em;
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
            <h1>Client work</h1>
            <img src= {temp} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Client work</h1>
            <img src= {temp} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Client work</h1>
            <img src= {temp} alt="logo"/>
          </ImageContainer>
          <ImageContainer>
            <h1>Client work</h1>
            <img src= {temp} alt="logo"/>
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
