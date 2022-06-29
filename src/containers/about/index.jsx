import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import webBackground from "../../assets/webBackground.mp4";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import headshot3 from "../../assets/headshot3.jpg";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";
import HorizontalScroll from "react-scroll-horizontal";


const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
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
  flex-direction: row;
  margin: 2em;
  align-items: start;
  justify-content: start;

`;

const ImageContainer = styled.div`
  width: 16em;
  height: 16em;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 20%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

`;

const MainContainer = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin: 0em 2em;

  h1 {
    line-height: 0em;
    font-size: 3em;
  }

  h2 {
    margin: 0em 0em 1em 0em;
  }

  p {
    margin: 0.5em 0em;
  }

  a {
    color:#A39450;
    text-decoration: none;
  }

  a:hover {
    color: #909E85;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em 0em 3em 0em;
`;


const TextContainer = styled.div`
  flex-direction: column;
  margin: 5em 4em 0em 0em;

`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function About(props) {
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
        <video autoPlay muted loop id="backgroundVideo">
          <source src= {webBackground} type="video/mp4"/>
        </video>
        <ContentContainer>
          <MainContainer>
            <TopContainer>
              <TextContainer> 
                <h1>Gabriel Hug</h1>
                <h2>Photographer and Web Designer</h2>
              </TextContainer>
              <ImageContainer>
                <img src={headshot3} alt="headshot"></img>
              </ImageContainer>
            </TopContainer>
              <p>Hey there my name is Gabe Hug and I am freelance Web Designer and Photographer! I am currently based in Chicago but will be traveling around the U.S. for the rest of 2022 in my self-converted van. This May I graduated with honors from Loyola University of Chicago with a major in Computer Science and minors in Photography and Sustainability Management.</p>
              <p>I started Blank Page Design this spring to help people design and build webpages that they can be proud of. With the prevalence of the internet, a good website sharing your products or ideas is a vital part of any company. Checkout some of my previous <a href="/webdesign">Web Design</a> work on this page!</p>
              <p>I have been capturing the world around me for 6 years now, primarily shooting on the streets of Chicago. I am beyond excited to capture photographs around the U.S. as I travel and would love to shoot for you along the way! The <a href="/photography">Photography pages</a> holds collections from the past 4 years and you can follow my travels by following my <a href="https://www.instagram.com/shutter_hug/" target="blank">Instagram!</a>.</p>
          </MainContainer>
          <Marginer direction="horizontal" margin={100}/>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}