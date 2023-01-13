import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import webBackground from "../../assets/webBackground.mp4";
import gabeImage from "../../assets/gabeImage.jpg";
import { useMediaQuery } from "react-responsive";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { Footer } from "../../components/footer";


const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-top: 4em;

  video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const FirstContainer = styled.div`
  height: auto; 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: 3px solid black;


  {/*Tablet*/} 
  @media screen and (min-width: ${deviceSize.tablet}px) {
    width: 85vw;
  }

`;

const MainContainer = styled.div`
  width: 38em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;

  h1 {
    line-height: 0em;
    font-size: 3em;
  }

  h2 {
    margin: 0em 0em 1em 0em;
  }

  p {
    font-size: 1.5em;
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

      h1 {
        font-size: 2em;
        line-height: 1em;
        margin: 0em;
      }

      h2 {
        font-size: 1em;
        margin: 0.5em 0em 0em 0em;
      }
      p {
        font-size: 1.2em;
      }
    }
`;

const ImageContainer = styled.div`
  width: 38em;
  height: 25em;
  margin: 3em 0em;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 2%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 3em 0em;
      width: 100%;
      height: auto;
    }

`;

const TopContainer = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 2em 0em 1em 0em;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 3em 0em 0em 0em;
    }

`;


const TextContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0em;

  
  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 0em;
      width: 100%;

    }

`;

const InformationContainer = styled.div`
    line-height: 1.8em;

`;


const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;

export function About(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer>
      <Background>
        {!isMobile && (
          <video autoPlay="autoPlay" muted="muted" loop="loop" id="backgroundVideo">
            <source src= {webBackground} type="video/mp4"/>
          </video>
        )}
        <DropdownMenu />
        <FirstContainer>
          <ContentContainer>
            <MainContainer>
              <TopContainer>
                <TextContainer> 
                  <h1>Gabriel Hug</h1>
                  <h2>Photographer and Web Designer</h2>
                </TextContainer>
              </TopContainer>
              <InformationContainer>
                <p>Hello! My name is Gabe Hug and I'm a freelance photographer and web designer. I began taking photographs 6 years ago, primarily capturing the streets of Chicago. I have a B.S. in Computer Science with minors in Photography and Sustainability Management from Loyola University of Chicago. My main experience and passion is in frontend design and development, creating functional and beautiful webpages for small businesses. </p>
                <p>Blank Page Design is a freelance web design and photography service. In 2022, I started Blank Page Design to create visually-pleasing, functional webpages and to capture meaningful moments for clients. I pride myself on making interactive designs for sites that showcase clients and their companies. I primarily design in React and have experience using popular website builders such as Squarespace.</p>
                <p>When I am not on my computer or behind the camera, I spend most of my time making music, biking, and trying to perfect the cup of coffee. After finishing school in May, I knew that I needed a change. My next journey will be traveling around the U.S. in my very own self-converted van! I am excited for this next chapter and cant wait to share my travels with you!</p>
              </InformationContainer>
              <ImageContainer>
                <img src={gabeImage} alt="Gabe Hug"></img>
              </ImageContainer>
            </MainContainer>
          </ContentContainer>
        </FirstContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
};