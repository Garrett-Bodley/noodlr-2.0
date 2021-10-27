import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

const Div = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  z-index: -1;
`;

const ModalBackground = (props) => {
  return <Div {...props} />;
};

export default ModalBackground;
