import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Logo } from "../../components/logo";
import { InlineWidget } from "react-calendly";
import { ContactFooter } from "../../components/footer/contactFooter";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import webBackground from "../../assets/webBackground.mp4";

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

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    h1 {
      font-size: 2em;
      line-height: 1em;
      margin: 1em 0em;
    }

    p {
      font-size 1.2em;
    }
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

  h4{ 
    margin: 0.5em 0em 1em 0em;
  }

  h3 {
    margin: 1em 0em -2em 0em;
  }

  h2 {
    margin: 1em 0em 0.5em 0em;
    text-decoration: underline;
  }

  a{
    color:#A39450;
    text-decoration: none;
  }

  a:hover {
    color: #909E85;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    h2 {
      margin: 1em 0em 0.5em 0em;
    }
    h3 {
      margin: 1em 0em;
    }
  }

`;

const CalendlyContainer = styled.div`
  width: 80em;
  height: 40em;
  margin: 2em;
  align-items: center;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }

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
              <p>I am currently looking to work for you! Since graduating in May I have moved my efforts toward working freelance. I have been on multiple event shoots, and weddings, and shot many graduation photos. I have also begun designing sites from wireframing to actual code development. I would love to work with you or your company to create something we are both proud of. Whether it's images for your company or brand, a photoshoot with your team, or a full website overhaul, I am here to get the job done! </p>
            </InformationContainer>
          </MainContainer>
          <InformationContainer>
            <h2>Services</h2>
            <p>Photography</p>
            <h4>Family | Events | Portraits | Weddings</h4>
            <p>Web Design</p> 
            <p>Wire Framming</p>    
            <h3><a href="mailto: gabrielhug@blankpagedesign.org" target="blank">Email me</a></h3>   
          </InformationContainer>
          <CalendlyContainer>
            <InlineWidget url="https://calendly.com/gaberhug/workwithme?month=2022-06"/>
          </CalendlyContainer>
          <Marginer direction="vertical" margin={50}/>
          <FooterContainer>
            <ContactFooter/>
        </FooterContainer>
        </ContentContainer>
      </Background>
    </PageContainer>
  )
};