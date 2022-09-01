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

const LogoContainer = styled.div`
  width: auto;
  height: auto;
`;

const MenuContainer = styled.div`
  width: auto;
  height: auto;
  margin: 0em 2em;
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
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Background>
    </PageContainer>
  )
};