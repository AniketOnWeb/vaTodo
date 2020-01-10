import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CurrentThemeContext = createContext();

export const CurrentThemeProvider = ({ children }) => {
  const [darkTheme, setdarkTheme] = useState(false);

  return (
    <CurrentThemeContext.Provider value={{ darkTheme, setdarkTheme }}>
      {children}
    </CurrentThemeContext.Provider>
  );
};

export const useCurrentTheme = () => useContext(CurrentThemeContext);

CurrentThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
