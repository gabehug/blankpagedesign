import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { ContactFooter } from "../../components/footer/contactFooter";
import { deviceSize } from "../../components/responsive";
import scrollIndi from "../../assets/scrollIndi.png";
import webBackground from "../../assets/webBackground.mp4";
import hughcgimg from "../../assets/hughcgimg.jpg";
import chainlinksimg from "../../assets/chainlinksimg.jpg";
import cryptodonsimg from "../../assets/cryptodonsimg.jpg";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;

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

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0em 0em 0em 1em;
  }
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 2em;

  image {
    width: 100%;
    height: 100%;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0em;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

`;

const TitleContainer = styled.div`
  width: 40em;
  margin: 2em 0em 0em 0em;

  {/*Mobile*/} 
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;
  }
`;

const InformationContainer = styled.div`
  width: 40em;
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

  h3 {
    margin:0;
  }
  
  p {
    font-size: 1.5em;
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
  width: 40em;
  height: auto;
  margin: 2em 0em;

  box-shadow: rgba(0, 0, 0, 0.45) -10px 25px 40px -20px;  

  img {
    width: 100%;
    height: 100%;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 2em 0em 0em 0em;
    width: 100%
  }

`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0em 0em 3em 0em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    margin: 2em 0em;
    justify-content: start;

  }
`;

const ScrollContainer = styled.div`
  width: 3em;
  height: 3em;
  position: sticky;
  top: 55em;
  right: 2em;
  

  img {
    transform: rotate(90deg);
    width: 3em;
    height: 3em;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        width: 2em;
        height: 2em;
        margin: 0em 2em;
      }
    }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function WebDesign(props) {
  return (
    <PageContainer>
      <Background>
        <video autoPlay muted loop id="backgroundVideo">
          <source src= {webBackground} type="video/mp4"/>
        </video>
        <OuterContainer>
          <MenuContainer>
            <LogoContainer>
              <Logo/>
            </LogoContainer>
            <Menu />
          </MenuContainer>
          <ContentContainer>
            <TitleContainer>
              <h1>Design Work</h1>
            </TitleContainer>
            <InformationContainer id="hcg">
              <h1>Hug Human Capital Group</h1>
              <p>I designed and created this site as a home base for Hug Human Capital Group. The site gives information on services provided, the company, and other important information. The built in appointment schedular allows clients to select a date and time to meet with someone from the company. The site is fully responsive using react responsive and flex layouts. This site was built using React. </p>
              <h4>HTML | CSS | Javascript</h4>
              <h3><a href="https://hughcg.org/" target="blank">Visit |</a><a href="https://github.com/gabehug/hug-hcg" target="blank"> Source</a></h3>
              <ImgContainer>
                <img src={hughcgimg}></img>
              </ImgContainer>
            </InformationContainer>
            <InformationContainer id="dons">
              <h1>Crypto Dons</h1>
              <p>This site was designed as the landing and comunity page for an unreleased NFT created by <a href="https://www.poncedleon.com/" target="blank">Seb</a>. Unfortunately the NFT project was canceled and the site was never fully put into production. The Github link below contains code for the base layouts and styles. The site was designed with the React framework and implements javascript, flex-box, and parallax scrolling effects.</p>
              <h4>HTML | CSS | Javascript</h4> 
              <h3><a href="https://github.com/gabehug/crypto-dons-web" target="blank">Source</a></h3>           
              <ImgContainer>
                <img src={cryptodonsimg}></img>
              </ImgContainer>
            </InformationContainer>
            <InformationContainer id="chain">
              <h1>Chainlinks</h1>
              <p>The Chainlinks site is the homepage for a small student run bike shop located on Loyola Univesity of Chicagos campus. ChainLinks is the nation’s first student-run bicycle shop. Running as a not-for-profit organization since 2011. ChainLinks strives to promote sustainability through clean bicycle transportation while engaging with the community at volunteer events. During my time working at Chainlinks I redesigned and maintained the state of this site. </p>
              <h4>Squarespace</h4>
              <h3><a href="http://www.chainlinksluc.com/" target="blank">Visit</a></h3>         
              <ImgContainer>
                <img src={chainlinksimg}></img>
              </ImgContainer>
            </InformationContainer>
          </ContentContainer>
          <ScrollContainer>
            <img src={scrollIndi}></img>
          </ScrollContainer>
        </OuterContainer>
        <FooterContainer>
          <ContactFooter />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}