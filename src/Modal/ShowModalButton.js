import React from "react";
import { config } from "react-spring";
import styled from "styled-components";
import useBoop from "../utilities/hooks/useBoop";
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
  z-index: 9001; /* It's over 9000!! */
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
  margin-top: -1px;
  margin-left: -1px;
  color: var(--color-light);
`;

const ShowModalButton = () => {
  const setIsVisible = useModalVisUpdate();
  const boopConfig = {
    rotation: 20,
    timing: 150,
    springConfig: config.wobbly
  }

  const [style, trigger] = useBoop(boopConfig)
  console.log({trigger})

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