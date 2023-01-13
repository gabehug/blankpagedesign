import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import webBackground from "../../assets/webBackground.mp4";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";


const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

`;

const ContentContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;


export function HomePage(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <PageContainer> 
      <Background>
        {!isMobile && (
          <video autoPlay="autoPlay" muted="muted" loop="loop" id="backgroundVideo">
            <source src= {webBackground} type="video/mp4"/>
          </video>
        )}
        <ContentContainer>
            <Logo/>
            <Menu/>
        </ContentContainer>
      </Background>
    </PageContainer>
  )
};