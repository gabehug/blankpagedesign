import React from "react";
import styled from "styled-components";
import footerIMG from "../../assets/footerIMG.png";
import footerImgHover from "../../assets/footerImgHover.png";
import linkedInWhite from "../../assets/linkedInWhite.png";
import linkedInHover from "../../assets/linkedInHover.png";
import githubWhite from "../../assets/githubWhite.png";
import githubHover from "../../assets/githubHover.png";
import instagramWhite from "../../assets/instagramWhite.png";
import instagramHover from "../../assets/instagramHover.png";

const Background= styled.div`
  width: 100vw;
  height: 40em;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
`;

const BotSection = styled.div`
  width: auto;
  height: auto;
`;

const LeftSection= styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 2em;
`;

const PhotoMenu= styled.div`
  margin: 1em;
`;

const WebDesignMenu= styled.div`
  margin: 1em;
`;

const TitleContainer= styled.div`
  color: #fff;
  font-size: 1em;
`;

const ListContainer= styled.div`
  width: 100%;
  color: #fff;
  font-size: 1.5em;
  line-height: 1.5em;

  ul {
    list-style: none;
    padding-left: 0.5em;
  }

  li {
    margin: 0em;
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

const RightSection= styled.div`
  width: auto;
  height: 100%;
  margin: 3em 2em;
`;

const LinkContainer= styled.div`
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
  width: 13em;
  height: 3.2em;
  display: flex;
  margin: 3em 2em 0em 2em;
`;

const LinkedInIcon = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5em 0em 0em 0em;
  background-image: url(${linkedInWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${linkedInHover});
    background-size: contain;
    cursor: pointer;
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

const InstagramIcon = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5em 0em 0em 0em;
  background-image: url(${instagramWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${instagramHover});
    background-size: contain;
    cursor: pointer;
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

const GithubIcon = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5em 0em 0em 0em;
  background-image: url(${githubWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  :hover{
    background-image: url(${githubHover});
    background-size: contain;
    cursor: pointer;
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

const BottomSection= styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;


const BotTitleContainer= styled.div`
  color: #fff;
  font-size: 0.75em;
  margin: 1em 0em 0em 0em;
  line-height: 2em;

  
  a {
    text-decoration: none;
    color: #fff;
  }

  hover{
    cursor: pointer;
    color: #A39450;
  }

`;

const CopywriteContainer = styled.div`
  color: #fff;
  font-size: 0.6em;
  line-height: 0em;
  margin: 0em 0em 2em 0em;
`;

export function ContactFooter(props) {

  return (
  <Background>
    <TopSection>
      <LeftSection>
        <PhotoMenu>
          <TitleContainer><h1>Photography</h1></TitleContainer>
          <ListContainer>
            <ul>
              <a href="/photography"><li>Fading Landscape</li></a>
              <a href="/photography/redline"><li>Redline</li></a>
              <a href="/photography/waste"><li>Waste</li></a>
              <a href="/photography/sign"><li>SIGN OF THE TIME</li></a>
              <a href="/photography/vietnam"><li>Vietnam</li></a>
              <a href="/photography/pdl"><li>PDL Collection</li></a>
            </ul>
          </ListContainer>
        </PhotoMenu>
        <WebDesignMenu>
          <TitleContainer><h1>Web Design</h1></TitleContainer>
          <ListContainer>
            <ul>
              <a href="/webDesign"><li>Hug HCG</li></a>
              <a href="/webDesign"><li>Crypto Dons</li></a>
              <a href="/webDesign"><li>Chainlinks</li></a>
            </ul>
          </ListContainer>
        </WebDesignMenu>
      </LeftSection>
      <RightSection>
      <LinkContainer>
          <ul>
            <a href="/prints"><li><h1>Prints</h1></li></a>
            <a href="/about"><li><h1>About</h1></li></a>
            <a href="/contact"><li><h1>Hire me!</h1></li></a>
            <a href="https://ko-fi.com/gabrielhug" target="_blank"><li><h1>Buy me a coffee</h1></li></a>
          </ul>
          <SocialIconContainer>
            <LinkedInIcon><a href="https://www.linkedin.com/in/gabriel-hug-75946796/" target="_blank"></a></LinkedInIcon>
            <GithubIcon><a href="https://github.com/gabehug" target="_blank"></a></GithubIcon>
            <InstagramIcon><a href="https://www.instagram.com/shutter_hug/" target="_blank"></a></InstagramIcon>
          </SocialIconContainer>
        </LinkContainer>
      </RightSection>
    </TopSection>
    <BotSection>
    <BottomSection>
      <BotTitleContainer><a href="/"><h1>Gabriel Hug</h1></a></BotTitleContainer>
      <CopywriteContainer>
        <p>©2022 Blank Page Design</p>
      </CopywriteContainer>
    </BottomSection>
  </BotSection>
  </Background>
  )
}