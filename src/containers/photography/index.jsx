import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import "../../components/footer/footerStyles.css";
import { PageContainer } from "../../components/pageContainer";
import DropdownMenu from "../../components/menu/dropdownMenu";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      h3{
        font-size: 1em;
      }
    }

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
  font-size: 1em;
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
  
  {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.tablet}px) {
      font-size: 2em;
    }

`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 0;

`;

const ButtonContainer = styled.div`
    width: auto;
    height: 100%;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PrintsButton = styled.button`
    width: auto;
    height: auto;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    border: 0px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-color: #F4F5EF;
    font-family: futura-pt, sans-serif;
    font-size: 1em;

    a {
      color: black;
    }

    :hover {
      background-color: #A39450;
    }
`;

const ImageContainer= styled.div`
    width: 90%;
    max-width: 38em;
    height: auto;
    margin-top: 2em;

    img {
      width: 100%;
      height: 100%;
    }
`;

const FooterContainer = styled.div`
  width: auto;
  height: 100%;
`;

const navIcon = {
  width: '25px',
  height: 'auto',
  margin: '0em 1em',
  color: 'black'

};

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
                    href="https://www.blankpageblog.org"
                    target="_blank"
                  >
                    <h2>BPD Blog</h2>
                  </a>
                </Line>
              </Text>
            </MenuGrid>
            <ButtonContainer>
              <h3>Interested in supporting my photography?</h3>
              <PrintsButton>
                <a href="/prints"><h4>Buy a Print</h4></a>
                <FontAwesomeIcon 
                  icon={faPrint}
                  style={navIcon}
                />
                </PrintsButton>
            </ButtonContainer>
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