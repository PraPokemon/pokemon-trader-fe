import React, { useState } from "react";

function SetLevel() {
  const [level, setLevel] = useState(0);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 100) {
      setLevel(newValue);
    }
  };

  return (
    <>
      <div className="SetLevel">
        <input
          className="InputBox"
          type="number"
          value={level}
          onChange={handleChange}
          style={{ width: "60px", height: "30px", textAlign: "center" }}
        />
      </div>
    </>
  );
}

export default SetLevel;
