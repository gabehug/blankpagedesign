import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import webBackground from "../../assets/webBackground.mp4";
import { Logo } from "../../components/logo";
import { InlineWidget } from "react-calendly";
import { ContactFooter } from "../../components/footer/contactFooter";
import { Marginer } from "../../components/marginer";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: scroll;
  overflow-y: visible;
  overflow-x: hidden;

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
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0em 0em 0em 4em;
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
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 0em;
  align-items: center;
  justify-content: start;
`;


const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0em;

  h1 {
    line-height: 0em;
    font-size: 4em;
    margin: 1em 0em 2em 0em;
  }

  h2 {
    margin: 1em 0em 2em 0em;
  }
`;

const InformationContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0em;

  p {
    margin: 0em;
  }
`;

const CalendlyContainer = styled.div`
  width: 80em;
  height: 40em;
  margin: 2em;
`;

const FooterContainer = styled.div`
  width: 100vw;
  height: auto;
`;


export function Contact(props) {
  return (
    <PageContainer> 
      <Background>
        <MenuContainer>
            <LogoContainer>
              <Logo/>
            </LogoContainer>
          </MenuContainer>
        <video autoPlay muted loop id="backgroundVideo">
          <source src= {webBackground} type="video/mp4"/>
        </video>
        <ContentContainer>
          <MainContainer>
            <h1>Lets work together!</h1>
            <InformationContainer>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </InformationContainer>
          </MainContainer>
          <Marginer direction="vertical" margin={50}/>
          <InformationContainer>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>Lorem ipsum dolor sit amet,</p>    
            <p>Lorem ipsum dolor sit amet,</p>
            <p>Lorem ipsum dolor sit amet,</p>       
          </InformationContainer>
          <CalendlyContainer>
            <InlineWidget url="https://calendly.com/gaberhug/meeting?month=2022-06"/>
          </CalendlyContainer>
          <Marginer direction="vertical" margin={50}/>
          <FooterContainer>
            <ContactFooter/>
        </FooterContainer>
        </ContentContainer>
      </Background>
    </PageContainer>
  )
}