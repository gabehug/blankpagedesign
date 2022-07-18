import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { ContactFooter } from "../../components/footer/contactFooter";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import webBackground from "../../assets/webBackground.mp4";
import headshot3 from "../../assets/headshot3.jpg";
import scrollIndi from "../../assets/scrollIndi.png";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  overflow: hidden;

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
  width: 100vw;
  display: flex;
  flex-direction: row;

`;

const MenuContainer = styled.div`
  width: 5.4em;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2em;
  align-items: center;
  justify-content: center;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 100%;
    }

`;

const ImageContainer = styled.div`
  width: 13em;
  height: 16em;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 2%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 0em 0em 1em 0em;
    }

`;

const MainContainer = styled.div`
  width: 42em;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  margin: 0em 2em;

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
      width: 100%;
      margin: 0em 0em 2em 0em;
      height: 100%;
      h1 {
        font-size: 2em;
        line-height: 1em;
        margin: 0em;
      }

      h2 {
        font-size: 1em;
        margin: 0.5em 0em;
      }
      p {
        font-size: 1.2em;
      }
    }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 16em;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 0em 0em 3em 0em;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 20em;
      flex-direction: column;
      margin: 2em 0em;
      justify-content: start;

    }
`;


const TextContainer = styled.div`
  height: 16em;
  display: flex;
  flex-direction: column;
  margin: 0em 4em 0em 0em;

  h1 {
    margin-top: 4em;
  }
  
  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 0em 0em 0em 0em;
      width: 100%;
      
      h1 {
        margin-top: 0em;
      }
    }

`;

const InformationContainer = styled.div`
    line-height: 1.8em;

`;

const ScrollContainer = styled.div`
  width: 95%;
  height: 10em;
  display: flex;
  justify-content: end;
  align-items: flex-start;


  img {
    transform: rotate(90deg);
    width: 3em;
    height: 3em;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: auto;
    margin: 0em 0em 2em 0em;
    img {
      width: 2em;
      height: 2em;
    }
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function About(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer> 
      <Background>
        <FirstContainer>
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
              {isMobile && (
              <ImageContainer>
                <img src={headshot3} alt="headshot"></img>
              </ImageContainer>
              )}
              <TextContainer> 
                <h1>Gabriel Hug</h1>
                <h2>Photographer and Web Designer</h2>
              </TextContainer>
              {!isMobile && (
              <ImageContainer>
                <img src={headshot3} alt="headshot"></img>
              </ImageContainer>
              )}
            </TopContainer>
            <InformationContainer>
              <p>Hello! My name is Gabe Hug and I'm a freelance photographer and web designer. I began taking photographs 6 years ago and have primarily captured photos on the streets of Chicago. I have a B.S. in Computer Science and minors in Photography and Sustainability Management from Loyola University of Chicago. My main experience is in frontend design and development, creating functional and beautiful webpages. </p>
              <p>Blank Page Design is a freelance photography and web design service, open to all photography opportunities and specializing in UI/UX design, specifically for the web. In 2022, I started Blank Page Design with the goals of helping people capture meaningful moments and create visually-pleasing and functional webpages.</p>
              <p>When I am not on my computer or behind the camera, I spend most of my time making music, biking, and perfecting the cup of coffee. After finishing school in May I knew that I needed a change. I am excited to share that I will soon be traveling around the U.S. in my very own self-converted van! I cant wait to share my travels with you and capture new parts of the U.S. I will be looking for photography and web design opportunities along the way.</p>
            </InformationContainer>
          </MainContainer>
          <ScrollContainer>
            <img src={scrollIndi}></img>
          </ScrollContainer>
        </ContentContainer>
        </FirstContainer>
        <FooterContainer>
          <ContactFooter />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
};