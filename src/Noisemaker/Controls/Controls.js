import React from "react";
import "./controls.css";
import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  grid,
  space,
  typography,
  layout,
} from "styled-system";
import { useTone } from "../../utilities/ToneProvider/ToneProvider";
import PlayPauseButton from "./PlayPauseButton";
import VolumeIcon from "./Icons/VolumeIcon";
import MetronomeIcon from "./Icons/MetronomeIcon";
import Range from "./Range";

const Article = styled.article`
  ${border}
  ${color};
  ${space};
  ${layout};
  ${flexbox}
  ${grid}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${border};
  ${flexbox};
  ${layout};
  ${space};
  ${typography};
`;

const Controls = (props) => {
  const { tempo, updateTempo, volume, updateVolume } = useTone();

  const handleTempoChange = (e) => {
    updateTempo(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e) => {
    updateVolume(e.target.value === "0" ? -Infinity : e.target.value - 45);
  };

  return (
    <Article
      {...props}
      className="controls"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gridTemplateColumns=""
      borderRadius="8px"
      marginRight="1em"
      marginY="1em"
      border="1px solid #faebd7"
      zIndex="2"
    >
      <Container
        borderBottom="1px solid #faebd7"
        width="100%"
        py="1rem"
        textAlign="center"
      >
        <h2>NOODLR</h2>
      </Container>
      <Container marginY="auto" width="100%">
        <Container width="90%">
          <span className="controls-label">
            <MetronomeIcon className="icon icon-metronome" />
            TEMPO
          </span>
          <Range
            eventHandler={handleTempoChange}
            min={60}
            max={180}
            value={tempo}
          />
        </Container>
        <Container width="90%">
          <span className="controls-label">
            <VolumeIcon className="icon icon-volume" /> VOLUME
          </span>
          <Range
            eventHandler={handleVolumeChange}
            min={0}
            max={50}
            value={volume === -Infinity ? 0 : volume + 45}
          />
        </Container>
        <PlayPauseButton />
      </Container>
    </Article>
  );
};

export default Controls;
