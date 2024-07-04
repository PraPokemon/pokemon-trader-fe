import React, { useState } from "react";

function FilterLvL({ setMinLevel, setMaxLevel }) {
  const [minLevel, setLocalMinLevel] = useState(0);
  const [maxLevel, setLocalMaxLevel] = useState(100);

  const handleMinLevelChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 100 && newValue <= maxLevel) {
      setLocalMinLevel(newValue);
      setMinLevel(newValue);
    }
  };

  const handleMaxLevelChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 100 && newValue >= minLevel) {
      setLocalMaxLevel(newValue);
      setMaxLevel(newValue);
    }
  };

  return (
    <>
      <h4>lvl:</h4>
      <div className="FilterLvL">
      
        <input
          className="InputBox"
          type="number"
          value={minLevel}
          onChange={handleMinLevelChange}
          style={{ width: "60px", height: "30px", textAlign: "center" }}
        />
        <h4 style={{ color: "gray" }}>--</h4>
        <input
          className="InputBox"
          type="number"
          value={maxLevel}
          onChange={handleMaxLevelChange}
          style={{ width: "60px", height: "30px", textAlign: "center" }}
        />
      </div>
    </>
  );
}

export default FilterLvL;
