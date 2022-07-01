import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import pdl from "../../photos/pdl.jpg";
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


  a {
    color:#A39450;
    text-decoration: none;
  }

  a:hover {
    color: #909E85;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 14em; 
    h1 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1em;
      margin: 0em;
    }

    p {
      font-size 1.2em;
    }

    h4 {
      font-size: 1em;
      margin: 0em;
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
     height: 35em;
   }
 }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function PDL(props) {
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
            <h1>Ponce De Leon</h1>
            <p>These images were taken for <a href="https://www.poncedleon.com/" target="blank">PDL</a> by Seb.</p>
            <h3>"Unsystematic design breaks from the fruitless demands of clothing factory of meaning, designs are not recycled in a simulacrum of “drops,” but are forged through the radical potential of the embrace of unpredictability." </h3>
            <p></p>
            <h4>Canon 7D mkii</h4>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </InformationContainer>
          <ImageContainer>
            <img src= {pdl} alt="logo"/>
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