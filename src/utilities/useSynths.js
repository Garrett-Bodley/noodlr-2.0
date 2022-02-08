import { useState, useEffect } from "react";
import * as Tone from "tone";

const useSynths = (
  rowCount,
  configObj = { oscillator: { type: "square8" } }
) => {
  const [synths, setSynths] = useState(null);
  const makeSynths = (rowCount) => {
    const synths = [];
    for (let i = 0; i < rowCount - 3; i++) {
      let synth = new Tone.Synth(configObj).toDestination();
      synths.push(synth);
    }

    for (let i = 0; i < 3; i++) {
      let drums = new Tone.Sampler({
        urls: {
          C1: "hihat.mp3",
          D1: "snare.mp3",
          E1: "kick.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/drum-samples/CR78/",
      }).toDestination();
      synths.push(drums);
    }

    return synths;
  };

  useEffect(() => {
    setSynths(makeSynths(rowCount));
    return () => synths.forEach((synth) => synth.dispose());
    // eslint-disable-next-line
  }, []);

  return synths;
};

export default useSynths;
