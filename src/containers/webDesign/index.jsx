import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import webBackground from "../../assets/webBackground.mp4";
import hughcg2 from "../../assets/hughcg2.jpg";
import hughcg1 from "../../assets/hughcg1.jpg";
import dons1 from "../../assets/dons1.jpg";
import dons2 from "../../assets/dons2.jpg";
import chainlinks1 from "../../assets/chainlinks1.jpg";
import emperor1 from "../../assets/emperor1.jpg";
import emperor2 from "../../assets/emperor2.jpg";
import { useMediaQuery } from "react-responsive";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { Footer } from "../../components/footer";

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

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-top: 2em;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  margin: 0em 2em 2em 2em;

  h1 {
    font-size: 1.5em;
  }

  h4 {
    margin: 0.5em 0em;
    font-size: 1.1em;
  }
  
  p {
    font-size: 1.4em;
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

const ImgContainer = styled.div`
  width: 38em;
  height: auto;
  margin: 2em 0em;


  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 2em 0em 0em 0em;
    width: 100%
  }

`;

const OuterContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2em 0em 0em 0em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    margin: 2em 0em;
    justify-content: start;

  }
`;

const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;

export function WebDesign(props) {
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
              <h1>Design Work</h1>
            </TitleContainer>
            <InformationContainer id="hcg">
              <h3>Hug Human Capital Group</h3>
              <p>This website is the home page for Hug Human Capital Group which offers guidence and leadership for upcoming transitions in your business. Specializing in interim senior level Human Resource leadership, Hug HCG will guide your organization through their next leadership transition. The site was designed using the React framework and gave me experience with the entire design workflow from ideation to creation. </p>
              <h4><a href="https://hughcg.org/" target="blank" rel="noreferrer">Visit |</a><a href="https://github.com/gabehug/hug-hcg" target="blank"> Source</a></h4>
              <ImgContainer>
                <img src={hughcg2} alt="HUG HCG asset 1"></img>
              </ImgContainer>
              <ImgContainer>
                <img src={hughcg1} alt="HUG HCG asset 2"></img>
              </ImgContainer>
            </InformationContainer>
            <InformationContainer id="dons">
              <h3>Crypto Dons</h3>
              <p>This site was designed as the landing and community page for an unreleased NFT created by <a href="https://www.poncedleon.com/" target="blank">Seb</a>. The NFT project was ultimately canceled and the site was never fully put into production. The Github link below contains code for the base layouts and styles. The site was designed with the React framework and implements javascript, flex-box, and parallax scrolling effects.</p>
              <h4><a href="https://github.com/gabehug/crypto-dons-web" target="blank" rel="noreferrer">Source</a></h4>           
              <ImgContainer>
                <img src={dons1} alt="Crypto Dons asset 1"></img>
              </ImgContainer>
              <ImgContainer>
                <img src={dons2} alt="Crypto Dons asset 2"></img>
              </ImgContainer>
            </InformationContainer>
            <InformationContainer id="emperor">
              <h3>Emperor Card Game</h3>
              <p>This is a java implementation of the card game Emperor created for my design and algorithms class at Loyola University Chicago. The Unity build contains numerous game scenes that allow a user to play the game, observe the rules, and submit scores to a local leaderboard. Through this project I gained intimate knowledge of Unity and C# development workflows, version control software best practices for remote development, and 2D UI/UX application design paradigms. Overall this project taught me how to use the Fisher-Yates shuffling algorithm for better performance and randomization, as well as how to implement a custom scoring algorithm.</p>
              <h4><a href="https://github.com/gabehug/Emperor-Card-Game" target="blank">Source</a></h4>           
              <ImgContainer>
                <img src={emperor1} alt="Emperor asset 1"></img>
              </ImgContainer>
              <ImgContainer>
                <img src={emperor2} alt="Emperor asset 2"></img>
              </ImgContainer>
            </InformationContainer>
            <InformationContainer id="chain">
              <h3>Chainlinks</h3>
              <p>The Chainlinks site is the homepage for a small student run bike shop located on Loyola Univesity of Chicagos campus. ChainLinks is the nation’s first student-run bicycle shop. Running as a not-for-profit organization since 2011. ChainLinks strives to promote sustainability through clean bicycle transportation while engaging with the community at volunteer events. During my time working at Chainlinks I redesigned and maintained the state of this Squarespace site. </p>
              <h4><a href="http://www.chainlinksluc.com/" target="blank">Visit</a></h4>         
              <ImgContainer>
                <img src={chainlinks1} alt="Chainlinks asset 1"></img>
              </ImgContainer>
            </InformationContainer>
          </ContentContainer>
        </OuterContainer>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}