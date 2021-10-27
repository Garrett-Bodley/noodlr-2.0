import React from "react";
import { animated } from "react-spring";
import CloseIcon from "./CloseIcon";
import styled from "styled-components";

const Container = styled(animated.div)`
  align-items: center;
  background-color: rgb(59, 60, 54);
  border: 1px solid rgb(250, 235, 215);
  border-radius: 12px;
  box-shadow: 0.8px 0.8px 0.8px rgba(0, 0, 0, 0.02),
    2px 2px 2px rgba(0, 0, 0, 0.028), 3.8px 3.8px 3.8px rgba(0, 0, 0, 0.035),
    6.7px 6.7px 6.7px rgba(0, 0, 0, 0.042),
    12.5px 12.5px 12.5px rgba(0, 0, 0, 0.05), 30px 30px 30px rgba(0, 0, 0, 0.07);
  color: rgb(250, 235, 215);
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono", monospace;
  justify-content: center;
  line-height: 1.5;
  max-width: 50em;
  width: 70%;
  padding: 2em;
  position: relative;
`;

const H1 = styled.h1`
  letter-spacing: 1vw;
`;

const Li = styled.li`
  padding: 0.25em 2em;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  height: 1em;
  margin: 1em;
  fill: rgb(250, 235, 215);
  cursor: pointer;
`;

const Ul = styled.ul`
  margin: 2em 4em 1em 4em;
  text-align: left;
  max-width: 60%;
`;

const Card = (props) => {
  return (
    <Container {...props}>
      <StyledCloseIcon onClick={props.closeModal} />
      <H1>INSTRUCTIONS</H1>
      <hr style={{ border: "1px solid rgb(250, 235, 215)", width: "70%" }} />
      <Ul>
        <Li>Click grid buttons to toggle on/off.</Li>
        <Li>Vertical axis dictates pitch.</Li>
        <Li>Horizontal axis dictates time.</Li>
        <Li>The bottom three rows are reserved for drums.</Li>
        <Li>Press the play button after making your selections.</Li>
        <Li>
          Toggle notes, adjust tempo/volume, etc. while Noisemaker is playing
          for real time feedback.
        </Li>
        <Li>Please enjoy yourself.</Li>
      </Ul>
    </Container>
  );
};

export default Card;
