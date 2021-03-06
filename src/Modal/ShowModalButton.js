import React, { useEffect, useState } from "react";
import { config, useSpring } from "react-spring";
import styled from "styled-components";
import { useModalVisUpdate } from "../utilities/ModalVisProvider";
import QuestionMarkIcon from "./QuestionMarkIcon";

const Edge = styled.div`
  background-color: black;
  height: 3em;
  width: 3em;
  margin: 2em;
  border-radius: 50%;
  position: absolute;
  box-shadow: 
    0.3px 0.3px 0.3px rgba(0, 0, 0, 0.028),
    0.7px 0.7px 0.7px rgba(0, 0, 0, 0.04), 
    1.3px 1.3px 1.3px rgba(0, 0, 0, 0.05),
    2.2px 2.2px 2.2px rgba(0, 0, 0, 0.06),
    4.2px 4.2px 4.2px rgba(0, 0, 0, 0.072), 
    10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const Front = styled.div`
  cursor: pointer;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark--dark);
  height: 3em;
  width: 3em;
  margin: 2em;
  border-radius: 50%;
  position: relative;
  transform: translateY(-5px);
  z-index: 5000;
  will-change: filter;
  transition-delay: 20ms;

  &:hover {
    filter: brightness(1.1);
  }
`;

const PositionWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
`;

const StyledIcon = styled(QuestionMarkIcon)`
  padding: 3px;
  transform: translate(-1px, -1px);
  height: inherit;
  width: inherit;
  color: var(--color-light);
`;

const ShowModalButton = () => {
  const setIsVisible = useModalVisUpdate();
  const [isBooped, setIsBooped] = useState(false);
  const rotation = 20;
  const timing = 150;

  const trigger = () => {
    setIsBooped(true);
  };

  useEffect(() => {
    if (!isBooped) return;

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => window.clearTimeout(timeoutId);
  }, [isBooped, timing]);

  const style = useSpring({
    transform: isBooped
      ? `translate(-1px, -1px)
         rotate(${rotation}deg)`
      : `translate(-1px, -1px)
         rotate(0deg)`,
    config: config.wobbly,
  });

  const showModal = () => {
    setIsVisible(true);
  };

  return (
    <PositionWrapper>
      <Edge />
      <Front onClick={showModal} onMouseEnter={trigger}>
        <StyledIcon style={style} />
      </Front>
    </PositionWrapper>
  );
};

export default ShowModalButton;