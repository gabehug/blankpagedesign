import React from "react";
import styled from "styled-components";
import linkedInWhite from "../../assets/linkedInWhite.png";
import linkedInHover from "../../assets/linkedInHover.png";
import githubWhite from "../../assets/githubWhite.png";
import githubHover from "../../assets/githubHover.png";
import instagramWhite from "../../assets/instagramWhite.png";
import instagramHover from "../../assets/instagramHover.png";
import kofi from "../../assets/kofi.png";
import kofiHover from "../../assets/kofiHover.png";
import RectangleFat from "../../assets/RectangleFat.png";
import RectangleFatHover from "../../assets/RectangleFatHover.png";
import { deviceSize } from "../responsive";

const SocialIconContainer = styled.div`
  height: 4.5em;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: end;
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: auto;
    }

`;

const LinkedInIcon = styled.div`
  height: 100%;
  width: 3em;
  margin: 0em;
  background-image: url(${linkedInWhite});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${linkedInHover});
    background-size: 80%;
    cursor: url('assets/bigCursor.png'), none;
  }

  a {
    position: absolute;
    width: 3em;
    height: 3em;
    z-index: 1;

  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
`;

const InstagramIcon = styled.div`
  height: 100%;
  width: 3em;
  margin: 0em;
  background-image: url(${instagramWhite});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${instagramHover});
    background-size: 80%;
    
  }

  a {
    position: absolute;
    width: 3em;
    height: 3em;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
`;

const HomeIcon = styled.div`
  height: 122%;
  width: 3em;
  margin: 0em;
  background-image: url(${RectangleFat});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${RectangleFatHover});
    background-size: 80%;
    
  }

  a {
    position: absolute;
    width: 3em;
    height: 3em;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 3.425em;
    } 
`;

const GithubIcon = styled.div`
  height: 100%;
  width: 3em;
  margin: 0em;
  background-image: url(${githubWhite});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${githubHover});
    background-size: 80%;
    
  }

  a {
    position: absolute;
    width: 3em;
    height: 3em;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
  `;

  const KofiIcon = styled.div`
  height: 95%;
  width: 3em;
  margin: 0em 0em 0em 0.25em;
  background-image: url(${kofi});
  background-size: 140%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${kofiHover});
    background-size: 80%;
  }

  a {
    position: absolute;
    width: 3em;
    height: 3em;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.3em;
      margin: 0.4em 0em 0em 0.2em;
    }
  `;

export function SocialIcons() {
  return (
    <SocialIconContainer>
        <GithubIcon id="icon"><a href="https://github.com/gabehug" target="_blank"></a></GithubIcon>
        <InstagramIcon id="icon"><a href="https://www.instagram.com/shutter_hug/" target="_blank"></a></InstagramIcon>
        <HomeIcon id="icon"><a href="/"></a></HomeIcon>
        <LinkedInIcon id="icon"><a href="https://www.linkedin.com/in/gabriel-hug-75946796/" target="_blank"></a></LinkedInIcon>
        <KofiIcon id="icon"><a href="https://ko-fi.com/gabrielhug" target="_blank"></a></KofiIcon>
    </SocialIconContainer>
  )
};