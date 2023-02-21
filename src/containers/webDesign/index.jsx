import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import webBackground from "../../assets/webBackground.mp4";
import hughcg2 from "../../assets/hughcg2.jpg";
import hughcg1 from "../../assets/hughcg1.jpg";
import chainlinks1 from "../../assets/chainlinks1.jpg";
import emperor1 from "../../assets/emperor1.jpg";
import emperor2 from "../../assets/emperor2.jpg";
import blog from "../../assets/blog.jpg";
import blog2 from "../../assets/blog2.jpg";
import { useMediaQuery } from "react-responsive";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { Footer } from "../../components/footer";
import IconHtml from  "../../assets/skillIcons/htmlLogo.png";
import IconCss from "../../assets/skillIcons/cssLogo.png"
import IconJs from "../../assets/skillIcons/jsLogo.png";
import IconReact from "../../assets/skillIcons/reactLogo.webp";
import IconGit from "../../assets/skillIcons/gitLogoi.png";
import IconAdobe from "../../assets/skillIcons/adobeLogo.png";

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
    margin-top: 2em;
    justify-content: start;

  }
`;

const SkillsContainer = styled.div`
    height: 100%;
    width: 80%;
    max-width: 38em;
    padding: 2em 0em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`;

const IconContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;

    img {
      width: 4em;
      height: auto;
    }

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        width: 2em;
      }
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
              <h1>Design Tech Stack</h1>
            </TitleContainer>
            <SkillsContainer>
              <IconContainer>
                <img src={IconHtml} alt=""></img>
                <img src={IconCss} alt=""></img>
                <img src={IconJs} alt=""></img>
                <img src={IconGit} alt=""></img>
                <img src={IconReact} alt=""></img>
                <img src={IconAdobe} alt=""></img>
              </IconContainer>
            </SkillsContainer>
            <TitleContainer>
              <h1>Projects</h1>
            </TitleContainer>
            <InformationContainer id="blog">
              <h3>NOTES FROM THE ROAD</h3>
              <p>This Blog was created using REMIX and was my first time using the framework. The quick page load times, nested routes, and built in error handling built in with REMIX made this site extremely fun to build. The site pulls from a Azure mySQL database where all of the posts are stored in markdown. This project gave me lots of practice pulling data from an outside source and formatting it on the front-end. It also gave me a great look at the benefits of using a framework like REMIX and encouraged me to try out other frameworks! If you are interested in reading about my trip to the American West click on the Visit option below! </p>
              <h4><a href="https://blankpageblog.org/" target="blank" rel="noreferrer">Visit |</a><a href="https://github.com/gabehug/notes" target="blank"> Source</a></h4>
              <ImgContainer>
                <img src={blog} alt="Blog asset 1"></img>
              </ImgContainer>
              <ImgContainer>
                <img src={blog2} alt="Blog asset 2"></img>
              </ImgContainer>
            </InformationContainer>
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