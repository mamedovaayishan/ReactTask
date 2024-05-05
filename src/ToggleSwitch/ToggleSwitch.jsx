import React, { useState } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="toggle-switch">
      <button className={`switch ${isActive ? "active" : ""}`} onClick={handleClick}>
        <span className="text"></span>
      </button>
      <div className="state">Current State: {isActive ? "On" : "Off"}</div>
    </div>
  );
}
