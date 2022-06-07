import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Menu } from "../../components/menu";
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


export function Redline(props) {
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
            <h1>Red Line</h1>
            <p>This is an artist statement....</p>
          </InformationContainer>
          <ImageContainer>
            <img src= {""} alt="logo"/>
            <img src= {""} alt="logo"/>
          </ImageContainer>
        </ContentContainer>
      </Background>
    </PageContainer>
  )
}