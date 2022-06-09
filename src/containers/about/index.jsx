import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import webBackground from "../../assets/webBackground.mp4";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import headshot3 from "../../assets/headshot3.jpg";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

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
  
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 2em;

  image {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: row;
  margin: 2em;
  align-items: start;
  justify-content: start;

`;

const ImageContainer = styled.div`
  width: 16em;
  height: 16em;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

`;

const MainContainer = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0em;
  
  h1 {
    line-height: 0em;
    font-size: 4em;
  }

  h2 {
    margin: 1em 0em 2em 0em;
  }

  p {
    margin: 0;
  }
`;

const InformationContainer = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0em;

  p {
    margin: 8em 0em;
  }
`;

const InterestsContainer = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0em;

  p {
    margin: 0em 0em;
  }
`;

const FinalMessageContainer = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0em;

  p {
    margin: 8em 0em;
  }
`;

const ScrollContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: end;
  

  img {
    width: 3em;
    height: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function About(props) {
  return (
    <PageContainer> 
      <Background>
        <MenuContainer>
            <LogoContainer>
              <Logo/>
            </LogoContainer>
            <Menu />
          </MenuContainer>
        <video autoPlay muted loop id="backgroundVideo">
          <source src= {webBackground} type="video/mp4"/>
        </video>
        <ContentContainer>
          <MainContainer>
            <h1>Hi there I'm Gabe!</h1>
            <h2>Photographer and Web Designer</h2>
            <ImageContainer>
              <img src={headshot3} alt="headshot"></img>
            </ImageContainer>
            <ScrollContainer>
              <img src={scrollIndi}></img>
            </ScrollContainer>
          </MainContainer>
          <Marginer direction="horizontal" margin={50}/>
          <InformationContainer>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </InformationContainer>
          <Marginer direction="horizontal" margin={50}/>
          <InterestsContainer>
            <p>Tellus in metus vulputate eu scelerisque felis imperdiet. Nibh praesent tristique magna sit amet purus gravida. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Risus feugiat in ante metus. Orci sagittis eu volutpat odio. Enim blandit volutpat maecenas volutpat blandit aliquam. Viverra ipsum nunc aliquet bibendum enim facilisis. Lacus luctus accumsan tortor posuere ac. Eget aliquet nibh praesent tristique magna sit amet. Erat pellentesque adipiscing commodo elit.</p>
          </InterestsContainer>
          <Marginer direction="horizontal" margin={50}/>
          <FinalMessageContainer>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </FinalMessageContainer>
          <Marginer direction="horizontal" margin={100}/>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}