import React from "react";
import styled from "styled-components";

const CustomCursor = styled.div`
  z-index: 10000;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 2px solid black;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0,0,0);
  position: fixed;

`;


export const Cursor = () => {
  const cursorRef = React.useRef(null)
  
  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const {clientX, clientY} = event;
      const mouseX = (clientX - cursorRef.current.clientWidth / 2) + 14;
      const mouseY = (clientY - cursorRef.current.clientHeight / 2) + 14;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);
  return <CustomCursor ref={cursorRef} />;
};