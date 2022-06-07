import React from "react";
import styled from "styled-components";
import footerIMG from "../../assets/footerIMG.png";

const Background= styled.div`
  width: 42em;
  height: 100%;
  margin: 0em 0em 0em 2em;
  background-color: black;
`;

const TopSection= styled.div`
  width: 100%;
  height: 25%;
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
  color: #fff;
  font-size: 1.5em;
  line-height: 1.5em;

  ul {
    list-style: none;
    padding-left: 1.5em;
  }

  li {
    margin: 0;
    color: #777777;
    
    :hover {
      cursor: pointer;
      color: #A39450; 
    }
  }
`;

const MidSection= styled.div`
  width: 30%;
  height: 25%;
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

const BottomSection= styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const ImageContainer= styled.div`
  width: 8.5em;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BotTitleContainer= styled.div`
  color: #fff;
  font-size: 0.75em;
  margin: 1em 0em 0em 0em;
  line-height: 2em;
`;

const CopywriteContainer = styled.div`
  color: #fff;
  font-size: 0.6em;
  line-height: 0em;
  margin: 0em 0em 5.5em 0em;
`;

export function Footer(props) {

  return (
  <Background>
    <TopSection>
      <PhotoMenu>
        <TitleContainer><h1>Photography</h1></TitleContainer>
        <ListContainer>
          <ul>
            <li>Fading Landscape</li>
            <li>Redline</li>
          </ul>
        </ListContainer>
      </PhotoMenu>
      <WebDesignMenu>
        <TitleContainer><h1>Web Design</h1></TitleContainer>
        <ListContainer>
          <ul>
            <li>Hug HCG</li>
            <li>Crypto Dons</li>
          </ul>
        </ListContainer>
      </WebDesignMenu>
    </TopSection>
    <MidSection>
    <LinkContainer>
        <ul>
          <a href="/prints"><li><h1>Prints</h1></li></a>
          <a href="/about"><li><h1>About</h1></li></a>
          <a href="/contact"><li><h1>Hire me!</h1></li></a>
          <li><h1>Socials...</h1></li>
        </ul>
      </LinkContainer>
    </MidSection>
    <BottomSection>
      <ImageContainer>
        <img src={footerIMG}></img>
      </ImageContainer>
      <BotTitleContainer><h1>Gabriel Hug</h1> </BotTitleContainer>
      <CopywriteContainer>
        <p>©2022 Blank Page Design</p>
      </CopywriteContainer>
    </BottomSection>
  </Background>
  )
}