import React from "react";
import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
} from "styled-system";

import Controls from "./Controls/Controls";
import Grid from "./Grid/Grid";
import VampProvider from "../utilities/VampProvider";

const Container = styled.section`
  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${shadow}
  ${space}

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(52, 53, 49);
    background: -moz-linear-gradient(
      90deg,
      rgba(52, 53, 49, 1) 0%,
      rgba(34, 35, 31, 1) 5%,
      rgba(34, 35, 31, 1) 98%,
      rgba(52, 53, 49, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(52, 53, 49, 1) 0%,
      rgba(34, 35, 31, 1) 5%,
      rgba(34, 35, 31, 1) 98%,
      rgba(52, 53, 49, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(52, 53, 49, 1) 0%,
      rgba(34, 35, 31, 1) 5%,
      rgba(34, 35, 31, 1) 98%,
      rgba(52, 53, 49, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#343531",endColorstr="#343531",GradientType=1);
    transform: translateY(10px);
    border: 1px solid var(--color-dark--dark);
    border-radius: 12px;
    box-shadow: 0.6px 0.6px 0.6px rgba(0, 0, 0, 0.028),
      1.3px 1.3px 1.3px rgba(0, 0, 0, 0.04),
      2.5px 2.5px 2.5px rgba(0, 0, 0, 0.05),
      4.5px 4.5px 4.5px rgba(0, 0, 0, 0.06),
      8.4px 8.4px 8.4px rgba(0, 0, 0, 0.072), 20px 20px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledGrid = styled(Grid)`
  ${grid}
  ${layout}
  ${space}
`;

const Noisemaker = ({ beatCount, pitches }) => {
  return (
    <VampProvider beatCount={beatCount} pitches={pitches}>
      <Container
        className="noisemaker"
        bg="#3b3c36"
        boxShadow="inset 0px 0px 0px 1px var(--color-dark--dark);"
        justifyContent="center"
        mx="1em"
        position="relative"
        borderRadius="12px"
        display="grid"
        gridTemplateColumns="4fr 2fr"
        gridTemplateAreas={' "tones controls" '}
      >
        <StyledGrid
          gridArea="tones"
          my="auto"
          rowCount={pitches.length}
          beatCount={beatCount}
          p=".5em 1em 1em 1em"
          colors={{ primary: "#38CC77", secondary: "#DE4839" }}
        />
        <Controls gridArea="controls" />
      </Container>
    </VampProvider>
  );
};

export default Noisemaker;

// Mobile Layout TODO
// smallest 653 x 280 || 568 x 320
// 1. Make Settings card.
//   a. Volume & Tempo Control
// 2. Make Settings button.
// 3. Create Mobile Noisemaker Component.
// 4. Add JS library to query mobile vs desktop.
// 5. Breakpoint.
// 6. Attribution Card (access via settings?)

// *STRETCH GOALS*
// 1. Share vamp link
// 2. Log in/out functionality
// 3̶.̶ D̶r̶a̶g̶ m̶o̶u̶s̶e̶ t̶o̶ e̶n̶a̶b̶l̶e̶ t̶o̶n̶e̶s̶
// 4. Adjust number of beats in settings
// 5. Choose your own pitches/sounds?
