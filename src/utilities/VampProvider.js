import React, { useContext, useState } from "react";
import makeGrid from "./makeGrid";

const VampContext = React.createContext();
const VampUpdateContext = React.createContext();

export const useIsActive = (rownum, beatnum) => {
  return useContext(VampContext)[rownum][beatnum].isActive
}

export const useVamp = () => {
  return useContext(VampContext);
};

export const useVampUpdate = () => {
  return useContext(VampUpdateContext);
};

const VampProvider = ({ children }) => {
  const [vamp, setVamp] = useState(makeGrid());

  const toggleNote = (clickedRow, clickedNote) => {
    let newVamp = [...vamp]
    let note = newVamp[clickedRow][clickedNote]
    note.isActive = !note.isActive
    setVamp(newVamp)
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
