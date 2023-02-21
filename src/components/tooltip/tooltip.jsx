import React, { useState } from "react";
import styled from "styled-components";


const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  
`;

const TooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  padding: 6px;
  margin: 6px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  font-size: 12px;
  font-family: 'Futura-pt';
  font-weight: 600;
  line-height: 1;
  z-index: 100;
`;

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <Background>
      <TooltipContainer
        onMouseEnter={showTip}
        onMouseLeave={hideTip}>
        {props.children}
        {active && (
          <TooltipTip className={'Tooltip-tip ${props.direction || "top"}'}>
            {props.content}
          </TooltipTip>
        )}
      </TooltipContainer>
    </Background>
  );
};
export default Tooltip;