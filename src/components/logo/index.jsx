import React from "react";
import styled from "styled-components";
import Rectangle from "../../assets/Rectangle.png";
import { deviceSize } from "../../components/responsive";


const Background = styled.div`
  width: auto;
  height: auto;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  display: flex; 
  justify-content: center;


  img {
    height: 7em;
    width: auto;
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      img {
        height: 5em;
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
}