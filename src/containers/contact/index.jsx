import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Logo } from "../../components/logo";
import { Menu } from "../../components/menu";
import { InlineWidget } from "react-calendly";
import { ContactFooter } from "../../components/footer/contactFooter";
import { deviceSize } from "../../components/responsive";
import webBackground from "../../assets/webBackground.mp4";
import scrollIndi from "../../assets/scrollIndi.png";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0em;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

`;

const TitleContainer = styled.div`
  width: 40em;
  margin: 2em 0em 0em 0em;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;
  }
`;

const InformationContainer = styled.div`
  width: 40em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  margin: 0em 2em 2em 2em;

  h1 {
    font-size: 1.5em;
  }

  h3 {
    margin:0;
  }
  
  p {
    font-size: 1.5em;
    margin: 0;
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
    padding: 2em 0em 0em 0em;
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
  margin: 0em 0em 3em 0em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    margin: 2em 0em;
    justify-content: start;

  }
`;

const ScrollContainer = styled.div`
  width: 3em;
  height: 3em;
  position: sticky;
  top: 55em;
  right: 2em;
  

  img {
    transform: rotate(90deg);
    width: 3em;
    height: 3em;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        width: 2em;
        height: 2em;
        margin: 0em 2em;
      }
    }
`;

const CalendlyContainer = styled.div`
  width: 45em;
  height: auto;
  margin: 0em 0em 4em 0em;
  align-items: center;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;
  }

`;


const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function Contact(props) {
  return (
    <PageContainer>
      <Background>
        <video autoPlay muted loop id="backgroundVideo">
          <source src= {webBackground} type="video/mp4"/>
        </video>
        <OuterContainer>
          <MenuContainer>
            <LogoContainer>
              <Logo/>
            </LogoContainer>
            <Menu />
          </MenuContainer>
          <ContentContainer>
            <TitleContainer>
              <h1>Lets work together!</h1>
            </TitleContainer>
            <InformationContainer>
              <p>I am currently looking to work for you! Since graduating in May I have moved my efforts toward working freelance. I have been on multiple event shoots, and weddings, and shot many graduation photos. I have also begun designing sites from wireframing to actual code development. I would love to work with you or your company to create something we are both proud of. Whether it's images for your company or brand, a photoshoot with your team, or a full website overhaul, I am here to get the job done! </p>
            </InformationContainer>
            <InformationContainer>
              <h2>Services</h2>
              <p>Photography</p>
              <h4>Family | Events | Portraits | Weddings</h4>
              <p>Web Design</p> 
              <p>Wire Framming</p>  
            </InformationContainer>
            <CalendlyContainer>
              <InlineWidget url="https://calendly.com/gaberhug/workwithme?month=2022-06"/>
            </CalendlyContainer>
          </ContentContainer>
          <ScrollContainer>
            <img src={scrollIndi}></img>
          </ScrollContainer>
        </OuterContainer>
        <FooterContainer>
          <ContactFooter />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}