import { useRef, useState } from "react";

const useBeat = (beatCount) => {
  const beat = useRef(0);
  const [beatMirror, setBeatMirror] = useState(0);

  const beatInc = () => {
    beat.current = (beat.current + 1) % beatCount;
    setBeatMirror(beat.current);
  };

  return [beat, beatInc, beatMirror];
};

export default useBeat;
