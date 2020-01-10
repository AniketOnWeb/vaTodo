import React from "react";

const DarkMode = ({ darkTheme, setDarkTheme }) => {
  return (
    <div style={{ marginRight: "3rem" }} className="lightMode">
      <input
        type="checkbox"
        className="navbar_mode-toggle"
        name="theme"
        id="toggle"
        onClick={() => setDarkTheme(!darkTheme)}
      />
      <label className="navbar_mode-toggle-label" htmlFor="toggle">
        kooojojo
      </label>
    </div>
  );
};

export default DarkMode;
