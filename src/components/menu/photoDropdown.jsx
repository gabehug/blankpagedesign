import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -1em;
  padding: 0;
`;

const DropdownButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: underline;
    color: inherit;
    cursor: pointer;

    :hover {
      color: #909E85;
    }
    
    p {
      line-height: 0em;
    }

    `;

const DropdownContent = styled.div`
    width: 100%;
    height: 100%;
    margin: -1em 0em -0.5em 0em;
    padding: 0.5em 1.5em;
  `;

const DropdownItem = styled.div`
    cursor: pointer;
    transition: all 0.2s;
    p {
      font-size: 1.25em;
      color: #343B33;
      :hover {
        color: #A39450;
      }
    }
`;



export default function PhotoDropdown(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <Dropdown>
      <DropdownButton onClick={e =>
        setIsActive(!isActive)}>
        <p>Photography</p>
      </DropdownButton>
      {isActive && (
      <DropdownContent>
        <DropdownItem>
        <a href="/photography"><li><p>Fading Landscape</p></li></a>
        </DropdownItem>
        <DropdownItem>
        <a href="/photography/redline"><li><p>Red Line</p></li></a>
        </DropdownItem>
        <DropdownItem>
        <a href="/photography/redline"><li><p>A SIGN OF THE TIMES</p></li></a>
        </DropdownItem>
        <DropdownItem>
        <a href="/photography/redline"><li><p>Vietnam</p></li></a>
        </DropdownItem>
        <DropdownItem>
        <a href="/photography/redline"><li><p>PDL Collection</p></li></a>
        </DropdownItem>
        <DropdownItem>
        <a href="/photography/redline"><li><p>Pocket Cam</p></li></a>
        </DropdownItem>
      </DropdownContent>  
      )}
    </Dropdown>
  );
}