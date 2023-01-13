import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Logo } from "../../components/logo";
import { InlineWidget } from "react-calendly";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import webBackground from "../../assets/webBackground.mp4";
import scrollIndi from "../../assets/scrollIndi.png";
import upwork from "../../assets/upwork.png";
import fiverr from "../../assets/fiverr.png";
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

const ContentContainer = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4em;
  border: 3px solid black;

  {/*Tablet*/} 
  @media screen and (min-width: ${deviceSize.tablet}px) {
    width: 85vw;
  }
`;

const TitleContainer = styled.div`
  width: 38em;
  margin: 2em 0em 0em 0em;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;
    margin: 0em;
  }
`;

const InformationContainer = styled.div`
  width: 38em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin: 0em 2em 2em 2em;

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.75em;
    margin: 0em 0em 0.5em 0em;
  }

  h3 {
    margin: 0.5em 0em;
  }

  h4 {
    margin: 0.5em 0em;
  }
  
  p {
    font-size: 1.5em;
    margin: 0em 0em 1em 0em;
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
    width: 80%;
    padding: 0em;
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

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0em;
`;


const CalendlyContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0em 0em 4em 0em;
  align-items: center;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;
  }

`;

const ButtonContainer = styled.div`
  width: 42em;
  height: auto;
  display: flex;
  justify-content: start;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;
  }

`;

const Button = styled.button`
  width: 8em;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: -1em 1em 2em 1em;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid black;
  font-family: futura-pt;
  font-size: 1em;
  font-weight: 700;

  a {
    text-decoration: none;
  }

  img {
    width: 25%;
    height: auto;
  }

  :hover {
    background-color: #A39450;
    border: 0px;
  }

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: -1em 1em 2em 0em;
  }

`;


const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;

export function Contact(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer> 
      <Background>
        {!isMobile && (
          <video autoPlay="autoPlay" muted="muted" loop="loop" id="backgroundVideo">
            <source src= {webBackground} type="video/mp4"/>
          </video>
        )}
        <DropdownMenu/>
        <OuterContainer>
          <ContentContainer>
            <TitleContainer>
              <h1>Lets work together!</h1>
            </TitleContainer>
            <InformationContainer>
              <p>I am currently looking for web design projects and photo shoots around the Twin Cities area. I have experience designing with React to create functional wepages that solve problems with minimalist user-friendly layouts. I am passionate about creating sites that show off everything you or your business have to offer. </p>
              <p>Taking photographs, capturing moments, has always been a passion of mine. I draw inspiration from the natural world, human interaction, and architecture to capture scenes from the world around me. Shooting on the streets of Chicago for the past 4 years has given me experience with all types of lighting conditions and shooting environments. I also have 6 years of experience shooting individual portraits and doing group photoshoots. Whether it's images for your company or product, a photoshoot with your team, or a website overhaul, I cant wait to create with you!</p>
              <h3>Connect with me on Upwork, Fiverr, or select a time to meet below.</h3>
            </InformationContainer>
            <ButtonContainer>
              <Button><a href="https://www.upwork.com/freelancers/~0165e8bf5636859fb3" target="_blank" rel="noreferrer"><img src={upwork} alt="Upwork Icon"></img></a></Button>
              <Button><a href="https://www.fiverr.com/gabehug?public_mode=true" target="_blank" rel="noreferrer"><img src={fiverr} alt="Fiverr Icon"></img></a></Button>
            </ButtonContainer>
            <CalendlyContainer>
              <InlineWidget url="https://calendly.com/gaberhug/workwithme?month=2022-06"/>
            </CalendlyContainer>
          </ContentContainer>
        </OuterContainer>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}