import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from ".";
import { PageContainer } from "../pageContainer";
import RectangleFat from "../../assets/RectangleFat.png";
import RectangleFatHover from "../../assets/RectangleFatHover.png";
import { deviceSize } from "../responsive";

const Background = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: auto;
  width: 10em;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: auto;
    }

`;

const Dropdown = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const DropdownButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: underline;
    color: inherit;

    :hover {
      color: #A39450;
    }
    
    p {
      line-height: 0em;
    }

    `;

const DropdownContent = styled.div`
    width: 100%;
    height: auto;
    margin: -1em 0em -0.5em 0em;
    padding: 0.5em 1.5em;
  `;

const DropdownItem = styled.div`
    transition: all 0.2s;
    list-style: none;

    p {
      font-size: 1.25em;
      color: #343B33;
      :hover {
        color: #A39450;
      }
    }
`;

const HomeIcon = styled.div`
  height: 3em;
  width: 3em;
  top:0;
  background-image: url(${RectangleFat});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    background-image: url(${RectangleFatHover});
    background-size: 80%;
    
  }

  a {
    position: absolute;
    width: 3em;
    height: 3em;
    z-index: 1;
  }

  
`;



export default function DropdownMenu(props) {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen ] = useState(false);
  return (
    <PageContainer>
      <Background>
        <ContentContainer>
          <Dropdown>
            <DropdownButton onClick={e =>
              setIsActive(!isActive)}>
              <p>Menu</p>
            </DropdownButton>
            {isActive && (
            <DropdownContent>
              <DropdownItem>
              <li><Menu /></li>
              </DropdownItem>
            </DropdownContent>  
            )}
          </Dropdown>

          <HomeIcon id="icon"><a href="/"></a></HomeIcon>

        </ContentContainer>
      </Background>
    </PageContainer>

  )
};