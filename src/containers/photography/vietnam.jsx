import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import { PageContainer } from "../../components/pageContainer";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { Footer } from "../../components/footer";
import { deviceSize } from "../../components/responsive";
import vietnam1 from "../../assets/photos/vietnam1.jpg";
import vietnam2 from "../../assets/photos/vietnam2.jpg";
import vietnam3 from "../../assets/photos/vietnam3.jpg";
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
  height: 45em;
  margin: 2em;
  display: flex;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    img {
      height: 40em;
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
    right: 13em;
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
        top: 27em;
    }

`;

export function Vietnam(props) {
  const scroll = {
    overflowX: 'visible',
  }
  return (
    <PageContainer>
      <Background>
      <HorizontalScroll reverseScroll style="scroll">
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer>
            <h1>Vietnam</h1>
            <p>The following is a selection of images from my time traveling in Vietnam and South East Asia. The kindest, most welcoming culture and people. I hope to be back soon!. </p>
            <h4>Canon 7D mkii</h4>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <img src= {vietnam1} alt="logo"/>
            <img src= {vietnam2} alt="logo"/>
            <img src= {vietnam3} alt="logo"/>
          </ImageContainer>
          <BackButton><a href="/photography/vietnam">Go Back</a></BackButton>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}