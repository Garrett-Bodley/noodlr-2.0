import React, { useState, useContext } from "react";

const ModalVisContext = React.createContext();
const ModalVisUpdateContext = React.createContext()

export const useModalVis = () => {
  return useContext(ModalVisContext)
}

export const useModalVisUpdate = () => {
  return useContext(ModalVisUpdateContext)
}

const ModalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
  <ModalVisContext.Provider value={isVisible}>
    <ModalVisUpdateContext.Provider value={setIsVisible} >
      {children}
    </ModalVisUpdateContext.Provider>
  </ModalVisContext.Provider>
  );
};

export default ModalProvider;
