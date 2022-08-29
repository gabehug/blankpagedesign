import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import { PageContainer } from "../../components/pageContainer";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { Footer } from "../../components/footer";
import { deviceSize } from "../../components/responsive";
import redlineIMG from "../../assets/photos/redlineIMG.png";
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

  p {
    margin-bottom: 0em;
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
  height: 45em;
  margin: 2em;
  display: flex;
  align-items: center;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    img {
     height: 25em;
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
    top: 35em;
    right: 14em;
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
        right: 13em;
    }

`;

export function Redline(props) {
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
            <h1>Red Line</h1>
            <p>These images were taken on the CTA Redline. Starting at Howard and traveling south to 95th/Dan Ryan, this sequence captures all 33 stops of the beloved Redline. Transporting over 200,000 people every day, the redline runs 24hrs/day 365days/year, creating a truly unique way to see the city.</p>
            <h5>*this collection is NOT sponsored by the CTA</h5>
            <h4>Canon 7D mkii | 50mm</h4>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <img src= {redlineIMG} alt="logo"/>
          </ImageContainer>
          <BackButton><a href="/photography/redline">Go Back</a></BackButton>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}