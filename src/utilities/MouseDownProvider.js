import React, { useContext, useState } from "react";

const MouseDownContext = React.createContext();

export const useMouseDown = () => {
  return useContext(MouseDownContext);
};

const MouseDownProvider = ({ children }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setMouseDown(true);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setMouseDown(false);
  };

  return (
    <MouseDownContext.Provider value={mouseDown}>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </div>
    </MouseDownContext.Provider>
  );
};

export default MouseDownProvider;
