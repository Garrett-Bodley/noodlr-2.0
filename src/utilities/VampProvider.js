import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import makeGrid from "./makeGrid";
import ToneProvider from "./ToneProvider";

const VampContext = React.createContext();
const VampUpdateContext = React.createContext();

export const useIsActive = (rownum, beatnum) => {
  return useContext(VampContext)[rownum][beatnum].isActive;
};

export const useVamp = () => {
  return useContext(VampContext);
};

export const useVampUpdate = () => {
  return useContext(VampUpdateContext);
};

const VampProvider = ({ beatCount, pitches, children }) => {
  const [vamp, setVamp] = useLocalStorage("vamp", makeGrid(beatCount, pitches));

  const toggleNote = (clickedRow, clickedNote) => {
    let newVamp = [...vamp];
    let note = newVamp[clickedRow][clickedNote];
    note.isActive = !note.isActive;
    setVamp(newVamp);
  };

  return (
    <VampContext.Provider value={vamp}>
      <VampUpdateContext.Provider value={toggleNote}>
        <ToneProvider>{children}</ToneProvider>
      </VampUpdateContext.Provider>
    </VampContext.Provider>
  );
};

export default VampProvider;
