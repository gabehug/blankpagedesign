import React from "react";
import styled from "styled-components";
import Rectangle from "../../assets/Rectangle.png";


const Background = styled.div`
  width: auto;
  height: auto;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;


  img {
    height: 7em;
    width: auto;
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