import React from "react";
import styled from "styled-components";
import { border, color, layout, position, space } from "styled-system";
import AspectRatioContainer from "../../utilities/AspectRatioContainer";
import { useVampUpdate, useIsActive } from "../../utilities/VampProvider";
import { useMouseDown } from "../../utilities/MouseDownProvider";

const Button = styled.button`
  ${border};
  ${color};
  ${layout};
  ${position};
  ${space};

  &::before {
    content: "";
    background: transparent;
    position: absolute;
    inset: 0;
    border: none;
    border-radius: 2px;
    background-color: ${(props) => props.activeColor || "#38CC77"};
    box-shadow: 
      inset 0.6px 0.1px 0.3px rgba(20, 31, 25, 0.36),
      inset 0.13px 0.4px 0.9px rgba(20, 31, 25, 0.54),
      inset 0.5px 1px 4px rgba(20, 31, 25, 0.09);

    opacity: ${(props) => (props.isActive ? "100%" : "0%")};
    will-change: opacity;
    transition: opacity 100ms ease;
  }

  &::after {
    content: "";
    background: transparent;
    position: absolute;
    inset: 0;
    border: none;
    border-radius: 2px;
    background-color: lightgray;
    box-shadow: 
      0.1px 0.1px 0.3px rgba(0, 0, 0, 0.238),
      0.2px 0.4px 0.9px rgba(0, 0, 0, 0.352), 
      1px 2px 4px rgba(0, 0, 0, 0.59);
    opacity: ${(props) => (props.isActive ? "0%" : "100%")};
    will-change: opacity;
    transition: opacity 100ms ease-in;
  }
`;

const Tone = (props) => {
  const { rowNum, beatNum, color } = props;
  const toggleNote = useVampUpdate();
  const isActive = useIsActive(rowNum, beatNum)
  const mouseDown = useMouseDown()

  const handleMouseDown = () => {
    toggleNote(rowNum, beatNum);
  };

  const handleOnEnter = e => {
    // e.preventDefault()
    if(mouseDown) toggleNote(rowNum, beatNum)
  }

  return (
    <AspectRatioContainer {...props}>
      <Button
        onMouseEnter={handleOnEnter}
        onMouseDown={handleMouseDown}
        position="relative"
        isActive={isActive}
        width="100%"
        height="100%"
        border="1px solid black"
        bg="lightgray"
        activeColor={color}
        borderRadius="3px"
        p="0"
      />
    </AspectRatioContainer>
  );
};

export default Tone;
