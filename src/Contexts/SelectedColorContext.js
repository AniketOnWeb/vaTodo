import React, { useContext, createContext, useState } from "react";
// import { SelectedProjectContext } from "./SelectedProjectContext";
import PropTypes from "prop-types";

export const SelectedColorContext = createContext();

export const SelectedColorProvider = ({ children }) => {
  const [SelectedColor, setSelectedColor] = useState();

  return (
    <SelectedColorContext.Provider value={{ SelectedColor, setSelectedColor }}>
      {children}
    </SelectedColorContext.Provider>
  );
};

export const useSelectedColorValue = () => useContext(SelectedColorContext);

SelectedColorProvider.propTypes = {
  children: PropTypes.node.isRequired
};
