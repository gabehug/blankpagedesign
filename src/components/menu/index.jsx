import React from "react";
import styled from "styled-components";
import { PageContainer } from "../pageContainer";
import PhotoDropdown from "./photoDropdown";
import { deviceSize } from "../../components/responsive";


const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    line-height: 1.2em;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: #A39450;
    }
  }

  {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.15em;
    }

`;

export function Menu(props) {
  return (
    <PageContainer> 
      <Background>
        <ul>
          <a href="/gabehug"><li><p>Gabe Hug</p></li></a>
          <li><PhotoDropdown/></li>
          <a href="/prints"><li><p>Prints</p></li></a>
          <a href="/webDesign"><li><p>Web Design</p></li></a>
          <a href="/contact"><li><p>Connect</p></li></a>
        </ul>
      </Background>
    </PageContainer>
  )
};