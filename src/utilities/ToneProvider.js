import React, { useContext, useCallback, useRef, useState } from "react";
import * as Tone from "tone";
import useSynths from "./useSynths"
import { useVamp } from "./VampProvider";

const ToneContext = React.createContext();
const PlayPauseContext = React.createContext();
const VolumeContext = React.createContext()
const TempoContext = React.createContext()
const BeatContext = React.createContext()

export const useTone = () => {
  return useContext(ToneContext);
};

export const usePlayPause = () => {
  return useContext(PlayPauseContext);
};

export const useTempo = () => {
  return useContext(TempoContext)
}

export const useVolume = () => {
  return useContext(VolumeContext)
}

export const useBeat = () => {
  return useContext(BeatContext)
}

const ToneProvider = ({ beatCount, children, rowCount }) => {
  const beat = useRef(0);
  const [beatMirror, setBeatMirror] = useState(0)
  const [isActivated, setIsActivated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(parseFloat(-20));
  const vamp = useVamp();

  const synths = useSynths(vamp.length)

  const togglePlay = () => {
    if (!isActivated) {
      Tone.start();
      Tone.Transport.bpm.value = tempo;
      Tone.Transport.scheduleRepeat(repeat, "8n");
      Tone.getDestination().volume.rampTo(volume, 0.001);
      setIsActivated(true);
    }
    isPlaying ? Tone.Transport.stop() : Tone.Transport.start()
    setIsPlaying(prevState => !prevState);
  };

  const repeat = useCallback(
    (time) => {
      vamp.forEach((row, index) => {
        let tone = row[beat.current];
        if (tone.isActive) {
          synths[index].triggerAttackRelease(tone.pitch, "8n", time);
        }
      });
      beat.current = (beat.current + 1) % beatCount;
      setBeatMirror(beat.current)
    },
    [beatCount, synths, vamp]
  );

  const updateTempo = (tempo) => {
    setTempo(tempo)
    Tone.Transport.bpm.rampTo(tempo, 0.1)
  }

  const updateVolume = (volume) => {
    setVolume(volume)
    Tone.getDestination().volume.rampTo(volume, 0.001)
  }

  return (
    <ToneContext.Provider value={Tone}>
      <PlayPauseContext.Provider value={togglePlay}>
        <TempoContext.Provider value={[tempo, updateTempo]}>
            <VolumeContext.Provider value={[volume, updateVolume]}>
                <BeatContext.Provider value={beatMirror}>
                  {children}
                </BeatContext.Provider>
            </VolumeContext.Provider>
        </TempoContext.Provider>
      </PlayPauseContext.Provider>
    </ToneContext.Provider>
  );
};

export default ToneProvider;
