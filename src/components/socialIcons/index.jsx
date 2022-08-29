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
import { deviceSize } from "../responsive";

const SocialIconContainer = styled.div`
  height: 12em;
  width: 3em;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 2em;
  right: 2em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 1em;
    margin: 0;
    right: 3em;
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
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
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
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.5em;
    }
  `;

  const KofiIcon = styled.div`
  height: 100%;
  width: 3em;
  margin: -0.3em 0em 0em 0.25em;
  background-image: url(${kofi});
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${kofiHover});
    background-size: 80%;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 2.75em;
      margin: 0.4em 0em 0em 0.2em;
    }
  `;

export function SocialIcons() {
  return (
    <SocialIconContainer>
        <GithubIcon id="icon"><a href="https://github.com/gabehug" target="_blank"></a></GithubIcon>
        <InstagramIcon id="icon"><a href="https://www.instagram.com/shutter_hug/" target="_blank"></a></InstagramIcon>
        <LinkedInIcon id="icon"><a href="https://www.linkedin.com/in/gabriel-hug-75946796/" target="_blank"></a></LinkedInIcon>
        <KofiIcon id="icon"><a href="https://ko-fi.com/gabrielhug" target="_blank"></a></KofiIcon>
    </SocialIconContainer>
  )
};