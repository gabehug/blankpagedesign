import React from "react";
import styled from "styled-components";
import Rectangle from "../../assets/Rectangle.png";
import { deviceSize } from "../../components/responsive";


const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex; 
  justify-content: center;
  padding: 1.5em;
  padding-bottom: 0em;

  img {
    height: 7em;
    width: auto;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        height: 8em;
      }
    }
`;


export function Logo(props) {
  return (
    <Background>
      <LogoContainer>
        <a href="/"><img src= {Rectangle} alt="logo"/></a>
      </LogoContainer> 
    </Background>
  )
};