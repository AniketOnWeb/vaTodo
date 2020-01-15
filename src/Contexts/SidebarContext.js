import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [bigScreen, setBigScreen] = useState(true);
  const [activeClass, setActiveClass] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        bigScreen,
        setBigScreen,
        activeClass,
        setActiveClass
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarValue = () => useContext(SidebarContext);

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired
};
