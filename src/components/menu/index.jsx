import React from "react";
import styled from "styled-components";
import { PageContainer } from "../pageContainer";
import PhotoDropdown from "./photoDropdown";
import WebDesignDropdown from "./webDesignDropdown";


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
      color: #909E85;
    }
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
          <li><WebDesignDropdown/></li>
          <a href="/contact"><li><p>Hire me!</p></li></a>
        </ul>
      </Background>
    </PageContainer>
  )
}