import React, { useContext } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        padding: "1rem",
        color: `${currentTheme.color}`,
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <p>ok ok</p>
      <button
        style={{
          backgroundColor: "#26ac60",
          padding: "10px 150px",
          fontSize: "12px",
          color: `${currentTheme.color}`,
          border: `${currentTheme.border}`,
        }}
      >
        Click me
      </button>
    </div>
  );
};
export default HeroSection;
