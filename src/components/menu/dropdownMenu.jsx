import React from "react";
import styled from "styled-components";
import { PageContainer } from "../pageContainer";
import RectangleFat from "../../assets/RectangleFat.png";
import RectangleFatHover from "../../assets/RectangleFatHover.png";
import { deviceSize } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Tooltip  from "../../components/tooltip/tooltip";
import "./dropdownStyles.css";

const Background = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  border-radius: 5px;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


  
  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: auto;
      width: 75vw;
      max-width: 19em;
    }

`;

const HomeIcon = styled.div`
  height: 3em;
  width: 3em;
  margin: 0em 1em;
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

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 150px;
    background-size: 45%;
    margin: 0;

    :hover{
      background-size: 45%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

`;

const navIcon = {
  width: '25px',
  height: 'auto',
  margin: '0em 1em',
  color: 'black'

};

export default function DropdownMenu(props) {
  
  return (
    <PageContainer>
      <Background>
        <ContentContainer>
          <a href="/gabehug">
            <Tooltip content="About" direction="right">
              <FontAwesomeIcon 
              icon={faUser}
              className="navIcon"
              style={navIcon}
            />
            </Tooltip>
          </a>
          <a href="/webDesign">
          <Tooltip content="Work" direction="down">
            <FontAwesomeIcon 
              icon={faBriefcase}
              className="navIcon"
              style={navIcon}
            />
            </Tooltip>
          </a>
          
          <HomeIcon id="icon">
              <a href="/"></a>
          </HomeIcon>
            
          <a href="/photography">
            <Tooltip content="Photos" direction="down">
            <FontAwesomeIcon 
              icon={faCamera}
              className="navIcon"
              style={navIcon}
            />
            </Tooltip>
          </a>
          <a href="/prints">
            <Tooltip content="Prints" direction="down">
            <FontAwesomeIcon 
              icon={faPrint}
              className="navIcon"
              style={navIcon}
            />
            </Tooltip>
          </a>

        </ContentContainer>
      </Background>
    </PageContainer>

  )
};