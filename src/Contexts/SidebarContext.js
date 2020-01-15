import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarValue = () => useContext(SidebarContext);

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired
};
