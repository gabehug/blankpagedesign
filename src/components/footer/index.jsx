import React from "react";
import styled from "styled-components";
import footerIMG from "../../assets/footerIMG.png";
import footerImgHover from "../../assets/footerImgHover.png";
import altLinkedIn from "../../assets/altLinkedIn.png";
import altLinkedInHover from "../../assets/altLinkedInHover.png";
import altGithub from "../../assets/altGithub.png";
import altGithubHover from "../../assets/altGithubHover.png";
import altInstagram from "../../assets/altInstagram.png";
import altInstagramHover from "../../assets/altInstagramHover.png";
import kofi from "../../assets/kofi.png";
import kofiHover from "../../assets/kofiHover.png";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";


const Background= styled.div`
  width: 42em;
  height: 100%;
  margin: 0em 0em 0em 2em;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 25em;
  }
`;

const TopSection= styled.div`
  width: 100%;
  height: 38%;
  display: flex;
  flex-direction: row;
`;

const PhotoMenu= styled.div`
  margin: 3em 2em 2em 3em;
`;

const WebDesignMenu= styled.div`
  margin: 3em 2em 2em 3em;
`;

const TitleContainer= styled.div`
  color: #fff;
  font-size: 1em;
  margin: 1em;
`;

const ListContainer= styled.div`
  width: 100%;
  color: #fff;
  font-size: 1.5em;
  line-height: 1.5em;

  ul {
    list-style: none;
    padding-left: 1em;
  }

  li {
    margin: 0;
    color: #777777;
    
    :hover {
      cursor: pointer;
      color: #A39450; 
    }
  }

  a {
    text-decoration: none;
  }
`;

const MidSection= styled.div`
  width: 100%;
  height: auto;
  display: flex; 
  align-items: flex-end;
  margin-top: 1em;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const LinkContainer= styled.div`
  width: auto;
  height: auto;
  color: #fff;
  font-size: 1em;
  margin: 0em 0em 0em 2em;

  ul {
    list-style: none;
  } 

  a {
    text-decoration: none;
    color: #fff;

    :hover{
      cursor: pointer;
      color: #A39450 ;
    }
  }
`;

const SocialIconContainer = styled.div`
  width: 14em;
  height: 2.5em;
  display: flex;
  justify-content: flex-end;
  margin: 0em 0em 2em 12em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 13em;
    margin: 0em 0em 0em 4em;
  }
`;

const LinkedInIcon = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5em 0em 0em 0em;
  background-image: url(${altLinkedIn});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${altLinkedInHover});
    background-size: contain;
    cursor: url('assets/bigCursor.png'), none;
  }

  a {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
`;

const InstagramIcon = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5em 0em 0em 0em;
  background-image: url(${altInstagram});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${altInstagramHover});
    background-size: contain;
    
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
`;

const GithubIcon = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5em 0em 0em 0em;
  background-image: url(${altGithub});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${altGithubHover});
    background-size: contain;
    
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
  `;

  const KofiIcon = styled.div`
  height: 125%;
  width: 100%;
  margin: 0.25em 0em 0em 0.4em;
  background-image: url(${kofi});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${kofiHover});
    background-size: 75%;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;

  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.75em;
      margin: 0.4em 0em 0em 0.2em;
    }
  `;

const BottomSection= styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

`;

const ImageContainer= styled.div`
  width: 5em;
  height: 7em;

  background-image: url(${footerIMG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin-top: 11em;

  :hover{
    background-image: url(${footerImgHover});
    background-size: contain;
    
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const BotTitleContainer= styled.div`
  color: #fff;
  font-size: 0.75em;
  margin: 1em 0em 0em 0em;
  line-height: 2em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-top: 25em;
  }
`;

const CopywriteContainer = styled.div`
  color: #fff;
  font-size: 0.6em;
  line-height: 0em;
  margin: 0em 0em 5.5em 0em;
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
  <Background className="whiteCursor" id="test">
    {!isMobile && (
    <TopSection>
      <PhotoMenu>
        <TitleContainer><h1>Photography</h1></TitleContainer>
        <ListContainer>
          <ul>
            <a href="/photography"><li id="icon">Client Work</li></a>
            <a href="/photography/fading"><li id="icon">Fading Landscape</li></a>
            <a href="/photography/redline"><li id="icon">Redline</li></a>
            <a href="/photography/waste"><li id="icon">Waste</li></a>
            <a href="/photography/sign"><li id="icon">A SIGN OF THE TIMES</li></a>
            <a href="/photography/vietnam"><li id="icon">Vietnam</li></a>
          </ul>
        </ListContainer>
      </PhotoMenu>
      <WebDesignMenu>
        <TitleContainer><h1>Web Design</h1></TitleContainer>
        <ListContainer>
          <ul>
            <a href="/webDesign"><li id="icon">Hug HCG</li></a>
            <a href="/webDesign"><li id="icon">Crypto Dons</li></a>
            <a href="/webDesign"><li id="icon">Chainlinks</li></a>
          </ul>
        </ListContainer>
      </WebDesignMenu>
    </TopSection>
    )}
    <MidSection>
      <LinkContainer>
        <ul>
          {isMobile && (
            <a href="/photography"><li><h1>Photography</h1></li></a>
          )}
          {isMobile && (
            <a href="/webdesign"><li><h1>Web Design</h1></li></a>
          )}
          <a href="/prints"><li><h1>Prints</h1></li></a>
          <a href="/gabehug"><li><h1>About</h1></li></a>
          <a href="/contact"><li><h1>Connect</h1></li></a>
        </ul>
      </LinkContainer>
      <SocialIconContainer>
        <LinkedInIcon id="icon"><a href="https://www.linkedin.com/in/gabriel-hug-75946796/" target="_blank"></a></LinkedInIcon>
        <GithubIcon><a href="https://github.com/gabehug" target="_blank"></a></GithubIcon>
        <InstagramIcon><a href="https://www.instagram.com/shutter_hug/" target="_blank"></a></InstagramIcon>
        <KofiIcon><a href="https://ko-fi.com/gabrielhug" target="_blank"></a></KofiIcon>
      </SocialIconContainer>
    </MidSection>
    <BottomSection>
      {!isMobile && (
      <ImageContainer>
        <a href="/"></a>
      </ImageContainer>
      )}
      <BotTitleContainer><h1>Gabriel Hug</h1> </BotTitleContainer>
      <CopywriteContainer>
        <p>©2022 Blank Page Design</p>
      </CopywriteContainer>
    </BottomSection>
  </Background>
  )
}