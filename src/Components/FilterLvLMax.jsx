import React, { useState } from 'react';

function FilterLvLMax() {
    const [minLevel, setMinLevel] = useState(0);
    const [maxLevel, setMaxLevel] = useState(100);
  

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setValue((prevValue) => Math.min(prevValue + 1, 100));
        break;
      case 'ArrowDown':
        setValue((prevValue) => Math.max(prevValue - 1, 0));
        break;
      default:
        break;
    }
  };

  return (
    <>
    <h4>  lvl:</h4>
    <input
      type="number"
      value={minLevel}
      onChange={(e) => setMinLevel(Number(e.target.value))}
      onKeyDown={(e) => handleKeyDown(e, setMinLevel)}
      style={{ width: '50px', textAlign: 'center' }}
    />

    <h4 style={{color:'gray'}}>--</h4>
    <input
      type="number"
      value={maxLevel}
      onChange={(e) => setMaxLevel(Number(e.target.value))}
      onKeyDown={(e) => handleKeyDown(e, setMaxLevel)}
      style={{ width: '50px', textAlign: 'center' }}
    />
    </>
    
  );
}

export default FilterLvLMax;
