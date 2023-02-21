import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import webBackground from "../../assets/webBackground.mp4";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "../../components/footer";
import Tooltip  from "../../components/tooltip/tooltip";

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

const IconLinks = styled.div`
  width: auto;
  max-width: 38em;
  height: 100%;
  display: flex;
  align-items: end;
  padding: 0em 0em 2em 0em;
`;

const Icon = {
  width: '40px',
  height: 'auto',
  padding: '0em 2em',
  color: 'black'
  
};


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
              <h1>Get in touch!</h1>
            </TitleContainer>
            <InformationContainer>
              <p>I am currently looking for  a full time position in Web Development. I have experience using React to create functional websites that solve user problems with intuitive layouts. I am passionate about creating and love to design unique and eye catching sites.</p>
              <h3>I want to talk with you!</h3>
              <h3><a href="mailto: gabrielhug@blankpagedesign.org" target="_blank">gaberhug@gmail.com &#8594;</a></h3>
            </InformationContainer>
            <IconLinks>
              <a href="https://www.linkedin.com/in/gabriel-hug-75946796/">
                <Tooltip content="LinkedIn" direction="down">
                  <FontAwesomeIcon 
                    icon={faLinkedin}
                    className="navIcon"
                    style={Icon}
                  />
                </Tooltip>
              </a>
              <a href="https://ko-fi.com/gabrielhug">
                <Tooltip content="Kofi" direction="down">
                  <FontAwesomeIcon 
                    icon={faMugSaucer}
                    className="navIcon"
                    style={Icon}
                  />
                </Tooltip>
              </a>
              <a href="https://github.com/gabehug">
                <Tooltip content="GitHub" direction="down">
                  <FontAwesomeIcon 
                    icon={faGitAlt}
                    className="navIcon"
                    style={Icon}
                  />
                </Tooltip>
              </a>
              
            </IconLinks>
          </ContentContainer>
        </OuterContainer>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}