import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import fadingLandscapes from "../../photos/fadingLandscapes.jpg";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/logo";
import scrollIndi from "../../assets/scrollIndi.png";
import HorizontalScroll from "react-scroll-horizontal";
import { render } from "@testing-library/react";
import { ScrollToButton } from "../../components/scrollTo";
import { VisibilityRounded } from "@material-ui/icons";
import { deviceSize } from "../../components/responsive";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

  h4 {
    font-size: 1.1em;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      width: 14em; 
      margin: 2em;
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
  height: auto;
  margin 1em;
  display: flex; 
  flex-direction: column; 
  align-items: start;

  img {
    width: 625em;
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
          <InformationContainer>
            <h1>The Fading Landscape</h1>
            <p>This collection looks at the encroaching presence of humans in nature. There is little of the natural world left untouched by humans. These images aim to capture the natural beauty of the landscape in which we build our world. </p>
            <h4>Cadet 4x5 Film | Yashica Mat-124G 120mm Film</h4>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <img src= {fadingLandscapes} alt="logo"/>
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
