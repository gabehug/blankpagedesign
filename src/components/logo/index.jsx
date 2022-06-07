import React from "react";
import styled from "styled-components";
import Rectangle from "../../assets/Rectangle.png";


const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;

  image {
    height: 100%;
    width: 100%;
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