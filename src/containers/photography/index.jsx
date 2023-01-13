import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import "../../components/footer/footerStyles.css";
import { PageContainer } from "../../components/pageContainer";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { Footer } from "../../components/footer";


const Background= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em;

  {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.tablet}px) {
      width: 85vw;
    }
`;


const PhotoList= styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  border: 3px solid black;

  {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.tablet}px) {
      width: 85vw;
    }
`;

const InformationContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2em;

`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0em 4em 0em;

`;

const MenuGrid = styled.div`
    width: 100%;
    max-width: 45em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
  color: black;
  font-size: 1.4em;
  letter-spacing: 0.25em;
  line-height: 0em;
  margin: 0em;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: black;
    line-height: 0;
  }

  a:hover {
    color: #A39450;
  }
  {/*Mobile*/}
    @media screen and (min-width: ${deviceSize.mobile}px) {
      font-size: 2em;
    }

`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 0;

`;

const ImageContainer= styled.div`
    width: 90%;
    max-width: 75em;
    height: auto;
    margin-top: 3em;

    img {
      width: 100%;
      height: 100%;
    }
`;

const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;



export function Photography(props) {
  return (
    <PageContainer>
      <Background>
        <DropdownMenu/>
        <PhotoList>
          <InformationContainer>
            <h3>Click on a link below to explore a project</h3>
          </InformationContainer>
          <ContentContainer>
            <MenuGrid>
              <Text id="text">
                <Line>
                  <a
                    className="word fancy"
                    id="about"
                    href="/photography/fading"
                  >
                    <h2>Fading Landscapes</h2>
                  </a>
                </Line>
                <Line>
                  <a
                    className="word fancy"
                    href="/photography/redline"
                  >
                    <h2>Red Line</h2>
                  </a>
                  <a
                    className="word fancy"
                    href="/photography/vietnam"
                  >
                    <h2>Vietnam</h2>
                  </a>
                </Line>
                <Line>
                  <a
                    className="word fancy"
                    href="/photography/sign"
                  >
                    <h2>A SIGN OF THE TIMES</h2>
                  </a>
                </Line>
                <Line>
                <a
                    className="word fancy"
                    href="/photography/waste"
                  >
                    <h2>Waste</h2>
                  </a>
                  <a
                    className="word fancy"
                    href=""
                    target="_blank"
                  >
                    <h2>Client</h2>
                  </a>
                </Line>
              </Text>
            </MenuGrid>
            <ImageContainer>
              <img src="https://res.cloudinary.com/blankpagedesign/image/upload/v1673021849/bpd/vietnam/Shutter_hugEdits-6448_gflhdz.jpg"/>
            </ImageContainer>
          </ContentContainer>
        </PhotoList>
        <FooterContainer>
              <Footer/>
            </FooterContainer>
      </Background>
  </PageContainer>
  );
};