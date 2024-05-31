import React, { useState } from "react";

function FilterLvL() {
  const [minLevel, setMinLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(100);

  return (
    <>
      <h4>lvl:</h4>
      <div className="FilterLvL">
        <input
          className="InputBox"
          type="number"
          value={minLevel}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (newValue >= 0 && newValue <= 100 && newValue <= maxLevel) {
              setMinLevel(newValue);
            }
          }}
          style={{ width: "60px", height: "30px", textAlign: "center" }}
        />

        <h4 style={{ color: "gray" }}>--</h4>
        <input
          className="InputBox"
          type="number"
          value={maxLevel}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (newValue >= 0 && newValue <= 100 && newValue >= minLevel) {
              setMaxLevel(newValue);
            }
          }}
          style={{ width: "60px", height: "30px", textAlign: "center" }}
        />
      </div>
    </>
  );
}

export default FilterLvL;
