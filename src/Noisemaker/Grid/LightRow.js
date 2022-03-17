import React from "react";
import styled from "styled-components";
import { flexbox, layout, space, grid } from "styled-system";
import Light from "./Light";
import { useTone } from '../../utilities/ToneProvider/ToneProvider'

const StyledRow = styled.div`
  ${flexbox}
  ${layout};
  ${space}
  ${grid}
`;

const LightRow = ({ beatCount }) => {
  const { beatMirror } = useTone();

  const renderLights = (beatCount) => {
    return [...Array(beatCount)].map((_, index) => {
      return (
        <Light
          key={index}
          beatNum={index}
          isActive={beatMirror === (index + 1) % beatCount}
        />
      );
    });
  };

  return (
    <StyledRow
      display="grid"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      gridTemplateColumns={`repeat(${beatCount}, 1fr)`}
      gridGap="2px"
    >
      {renderLights(beatCount)}
    </StyledRow>
  );
};

export default LightRow;
