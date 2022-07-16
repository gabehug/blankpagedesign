import React from "react";
import { PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { useScrollTo } from 'react-use-window-scroll';


const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

`;

const BackButton = styled.button`\
  background-color: green;

`;


export function ScrollToButton(props) {
  const scrollTo = useScrollTo();

  return (
    <PageContainer> 
      <Background>
        <BackButton onClick={() => scrollTo(0,0)}>~</BackButton>
      </Background>
    </PageContainer>
  )
};