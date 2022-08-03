import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const Background= styled.div`
  width: 100vw;
  height: 40em;
  display: flex;
  flex-direction: column;
  background-color: black;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 100%;
    }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
    }
`;

const BotSection = styled.div`
  width: auto;
  height: auto;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 100%;
  }
`;


const LeftSection= styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 2em;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        h1 {
          font-size: 1.5em;
        }
    }

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

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 2em 0em;
        h1 {
          font-size: 1.5em;
        }
    }
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
      color: #A39450 ;
    }
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      margin: 0em 1em;
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

  h1: hover{
    color: #A39450;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      font-size: 0.5em;
      margin: 0em;
    }

`;

const CopywriteContainer = styled.div`
  color: #fff;
  font-size: 0.6em;
  line-height: 0em;
  margin: 0em 0em 2em 0em;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      font-size: 0.4em;
      margin: 0em 0em 9em 0em;
    }
  
`;

export function ContactFooter(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  
  return (
  <Background id="icon">
    <TopSection>
      {!isMobile && (
      <LeftSection>
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
      </LeftSection>
      )}
      <RightSection>
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
};