import React from "react";
import styled from "styled-components";
import { deviceSize } from "../responsive";
import "./footerStyles.css";


const Background= styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-bottom: 1em;
  border: 3px solid black;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


  {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.tablet}px) {
      width: 85vw;
    }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6em 0em;

`;

const MenuGrid = styled.div`
    width: 100%;
    max-width: 38em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
  color: white;
  font-size: 1.5em;
  letter-spacing: 0.25em;
  line-height: 0em;
  margin: 0em;
  text-transform: uppercase;

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


const CopyriteContainer = styled.div`
  color: #fff;
  font-size: 0.6em;
  line-height: 0em;
  margin: 6em 0em -3em 0em;
`;



export function Footer(props) {
  return (
  <Background id="icon">
    <ContentContainer>
      <MenuGrid>
        <Text id="text">
          <Line>
            <a
              className="word fancy"
              id="about"
              href="/gabehug"
            >
              <h2>Gabriel</h2>
            </a>
            <h2 className="word">Hug</h2>
          </Line>
          <Line>
            <a
              className="word fancy"
              href="/webDesign"
            >
              <h2>Web Design</h2>
            </a>
            <h2 className="word">&</h2>
          </Line>
          <Line>
            <a
              className="word fancy"
              href="/photography"
            >
              <h2>Photography</h2>
            </a>
          </Line>
          <Line>
            <a
              className="word fancy"
              href="/photography/prints"
            >
              <h2>Prints</h2>
            </a>
            <a
              className="word fancy"
              id="insta-link"
              href="https://www.instagram.com/shutter_hug/?hl=en"
              target="_blank"
            >
              <h2>{String.fromCharCode(8641)}Insta</h2>
            </a>
            
          </Line>
          <Line>
          <a
              className="word fancy"
              href="/contact"
            >
              <h2>Contact</h2>
            </a>
          <a
              className="word fancy"
              href="https://github.com/gabehug"
              target="_blank"
            >
              <h2>{String.fromCharCode(8641)}Git</h2>
            </a>
          </Line>
        </Text>
      </MenuGrid>
      <CopyriteContainer>
        <h3>© 2022 BPD</h3>
      </CopyriteContainer>
    </ContentContainer>
  </Background>
  )
}