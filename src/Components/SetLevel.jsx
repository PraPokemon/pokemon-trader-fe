import React from 'react';

function SetLevel({ onLevelChange }) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    
      const newValue = Number(inputValue);
      if (newValue >= 0 && newValue <= 100) {
        onLevelChange(newValue);
      }
    
  };

  return (
    <div className="SetLevel">
      <h4>LVL:</h4>
      <input
        className="InputBox"
        type="number"
        onChange={handleChange}
        style={{ width: "70px", height: "30px", textAlign: "center" }}
      />
    </div>
  );
}

export default SetLevel;
