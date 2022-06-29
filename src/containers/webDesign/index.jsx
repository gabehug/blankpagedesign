import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import redlineIMG from "../../photos/redlineIMG.png";
import { Footer } from "../../components/footer";
import scrollIndi from "../../assets/scrollIndi.png";
import hughcgimg from "../../assets/hughcgimg.jpg";
import chainlinksimg from "../../assets/chainlinksimg.jpg";
import cryptodonsimg from "../../assets/cryptodonsimg.jpg";
import HorizontalScroll from "react-scroll-horizontal";


const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const InformationContainer = styled.div`
  width: auto;
  height: 42em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin: 2em;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.45) -10px 25px 40px -20px;  

  h3 {
    margin:0;
  }
  
  a {
    color:#A39450;
    text-decoration: none;
  }

  a:hover {
    color: #909E85;
  }
  `;

const ImgContainer = styled.div`
  width: 40em;
  height: auto;
  margin: 2em 2em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export function WebDesign(props) {
  return (
    <PageContainer>
      <Background>
      <HorizontalScroll reverseScroll>
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer id="hcg">
            <h1>Hug Human Capital Group</h1>
            <p>I designed and created this site as a home base for Hug Human Capital Group. The site gives information on services provided, the company, and other important information. The built in appointment schedular allows clients to select a date and time to meet with someone from the company. The site is fully responsive using react responsive and flex layouts. This site was built using React. </p>
            <h3><a href="https://hughcg.org/" target="blank">Hug HCG</a></h3>
            <h3><a href="https://github.com/gabehug/hug-hcg" target="blank">GitHub</a></h3>
            <h4>HTML | CSS | Javascript</h4>
            <ImgContainer>
              <img src={hughcgimg}></img>
            </ImgContainer>
          </InformationContainer>
          <InformationContainer id="dons">
            <h1>Crypto Dons</h1>
            <p>This site was designed as the landing and comunity page for an unreleased NFT created by <a href="https://www.poncedleon.com/" target="blank">Seb</a>. Unfortunately the NFT project was canceled and the site was never fully put into production. The Github link below contains code for the base layouts and styles. The site was designed with the React framework and implements javascript, flex-box, and parallax scrolling effects.</p>
            <h3><a href="https://github.com/gabehug/crypto-dons-web" target="blank">GitHub</a></h3>
            <h4>HTML | CSS | Javascript</h4>            
            <ImgContainer>
              <img src={cryptodonsimg}></img>
            </ImgContainer>
          </InformationContainer>
          <InformationContainer id="chain">
            <h1>Chainlinks</h1>
            <p>The Chainlinks site is the homepage for a small student run bike shop located on Loyola Univesity of Chicagos campus. ChainLinks is the nation’s first student-run bicycle shop. Running as a not-for-profit organization since 2011. ChainLinks strives to promote sustainability through clean bicycle transportation while engaging with the community at volunteer events. During my time working at Chainlinks I redesigned and maintained the state of this site. </p>
            <h3><a href="http://www.chainlinksluc.com/" target="blank">Chainlinks</a></h3>
            <h4>Squarespace</h4>             
            <ImgContainer>
              <img src={chainlinksimg}></img>
            </ImgContainer>
          </InformationContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </HorizontalScroll>
      </Background>
    </PageContainer>
  )
}