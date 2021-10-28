import Card from "./Card";
import ModalBackground from "./ModalBackground";
import React, { useState } from "react";
import styled from "styled-components";
import { animated, config, useTransition } from "react-spring";

const Wrapper = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  isolation: isolate;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  padding: 5em;
  text-align: center;
  width: 100%;
  z-index: 3;
`;

const Modal = ({isVisible, hideModal}) => {

  const cardTransitions = useTransition(isVisible, {
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
    reverse: isVisible,
    config: config.slow
  });

  const transitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isVisible,
    config: config.slow
  })

  return transitions((styles, item) => 
    item &&       
    <Wrapper style={styles}>
      <ModalBackground/>
      {cardTransitions((styles, item) => item && <Card style={styles} hideModal={hideModal} />)}
    </Wrapper>
  )
};

export default Modal;
