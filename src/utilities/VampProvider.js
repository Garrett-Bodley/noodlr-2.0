import React, { useContext, useEffect, useRef } from "react";
import makeGrid from "./makeGrid";

const VampContext = React.createContext();
const VampUpdateContext = React.createContext();

export const useVamp = () => {
  return useContext(VampContext);
};

export const useVampUpdate = () => {
  return useContext(VampUpdateContext);
};

const VampProvider = ({ beatCount, children, pitches }) => {

  const vamp = useRef(makeGrid(beatCount, pitches));

  useEffect(() => {
    vamp.current = makeGrid(beatCount)
  }, [beatCount])

  const toggleNote = (clickedRow, clickedNote) => {
    let note = vamp.current[clickedRow][clickedNote]
    note.isActive = !note.isActive
  };

  return (
    <VampContext.Provider value={vamp}>
      <VampUpdateContext.Provider value={toggleNote}>
        {children}
      </VampUpdateContext.Provider>
    </VampContext.Provider>
  );
};

export default VampProvider;
