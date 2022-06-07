import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
import Rectangle from "../../assets/Rectangle.png";
import image1_120mm_24 from "../../photos/image1_120mm_24.jpg";
import image2_120mm_23 from "../../photos/image2_120mm_23.jpg";
import image3_120mm_16 from "../../photos/image3_120mm_16.jpg";
import image4_4x5_1 from "../../photos/image4_4x5_1.jpg";
import image5_120mm_7 from "../../photos/image5_120mm_7.jpg";
import image6_4x5_9 from "../../photos/image6_4x5_9.jpg";
import image7_120mm_6 from "../../photos/image7_120mm_6.jpg";
import image8_120mm_2 from "../../photos/image8_120mm_2.jpg";
import image9_120mm_22 from "../../photos/image9_120mm_22.jpg";
import image10_120mm_17 from "../../photos/image10_120mm_17.jpg";
import image11_4x5_2 from "../../photos/image11_4x5_2.jpg";
import image12_4x5_14 from "../../photos/image12_4x5_14.jpg";
import image13_120mm_18 from "../../photos/image13_120mm_18.jpg";
import image14_4x5_11 from "../../photos/image14_4x5_11.jpg";
import image15_4x5_3 from "../../photos/image15_4x5_3.jpg";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/logo";


const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
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
  align-items: center;

`;

const InformationContainer = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4em;
`;

const ImageContainer = styled.div`
  width: auto;
  height; 100vh;
  display: flex; 
  flex-direction: row; 

  img {
    width: 50em;
    height: 50em;
    margin 2em;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;


export function Photography(props) {
  return (
    <PageContainer>
      <Background>
        <MenuContainer>
          <LogoContainer>
            <Logo/>
          </LogoContainer>
          <Menu />
        </MenuContainer>
        <ContentContainer>
          <InformationContainer>
            <h1>The Fading Landscape</h1>
            <p>This is an artists statement about how this is all about nature 
and humans are fucking up the planet and yay thats all that
I have for you today, that is my statement. I would need to add 
more actual information here about where it was Show and
all of that other shit, what camera I was using, but for now this
looks good. I just need something here! </p>
          </InformationContainer>
          <ImageContainer>
            <img src= {image1_120mm_24} alt="logo"/>
            <img src= {image2_120mm_23} alt="logo"/>
            <img src= {image3_120mm_16} alt="logo"/>
            <img src= {image5_120mm_7} alt="logo"/>
            <img src= {image4_4x5_1} alt="logo"/>
            <img src= {image6_4x5_9} alt="logo"/>
            <img src= {image7_120mm_6} alt="logo"/>
            <img src= {image8_120mm_2} alt="logo"/>
            <img src= {image9_120mm_22} alt="logo"/>
            <img src= {image10_120mm_17} alt="logo"/>
            <img src= {image11_4x5_2} alt="logo"/>
            <img src= {image12_4x5_14} alt="logo"/>
            <img src= {image13_120mm_18} alt="logo"/>
            <img src= {image14_4x5_11} alt="logo"/>
            <img src= {image15_4x5_3} alt="logo"/>
          </ImageContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Background>
    </PageContainer>
  )
}