import Card from "./Card";
import ModalBackground from "./ModalBackground";
import React, { useState } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

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

const Modal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
  };

  const cardTransitions = useTransition(isVisible, {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0, opacity: 0 },
    reverse: isVisible
  });

  const bgTransitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isVisible
  })

  return (
      <Wrapper>
        {bgTransitions((styles, item) => item && <ModalBackground style={styles} />)}
        {cardTransitions((styles, item) => item && <Card style={styles} closeModal={closeModal} />)}
      </Wrapper>
  )
};

export default Modal;
