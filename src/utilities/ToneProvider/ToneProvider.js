import React, { useContext, useCallback, useState } from "react";
import * as Tone from "tone";
import useBeat from "../hooks/useBeat";
import useSynths from "../hooks/useSynths";
import { useVamp } from "../VampProvider";

const ToneContext = React.createContext();

export const useTone = () => {
  return useContext(ToneContext);
};

const ToneProvider = ({ children }) => {
  
  const [activated, setActivated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(parseFloat(-20));

  const vamp = useVamp();
  const [beat, beatInc, beatMirror] = useBeat(vamp[0].length);

  const synths = useSynths(vamp.length);

  const activate = () => {
    Tone.start();
    Tone.Transport.bpm.value = tempo;
    Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.getDestination().volume.rampTo(volume, 0.001);
    setActivated(true);
  };

  const togglePlay = () => {
    if (!activated) activate();
    isPlaying ? Tone.Transport.stop() : Tone.Transport.start();
    setIsPlaying((prevState) => !prevState);
  };

  const repeat = useCallback(
    (time) => {
      vamp.forEach((row, index) => {
        let tone = row[beat.current];
        if (tone.isActive) {
          synths[index].triggerAttackRelease(tone.pitch, "8n", time);
        }
      });
      beatInc();
    },
    [beat, beatInc, synths, vamp]
  );

  const updateTempo = (tempo) => {
    setTempo(tempo);
    Tone.Transport.bpm.rampTo(tempo, 0.1);
  };

  const updateVolume = (volume) => {
    setVolume(volume);
    Tone.getDestination().volume.rampTo(volume, 0.001);
  };

  const API = {
    beatMirror,
    tempo,
    togglePlay,
    updateTempo,
    updateVolume,
    volume
  };

  return <ToneContext.Provider value={API}>{children}</ToneContext.Provider>;
};

export default ToneProvider;
