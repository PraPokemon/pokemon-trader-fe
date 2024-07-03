import React from "react";

function PokemonFilterSearch({ setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h4>Pokemon:</h4>
      <input
        className="InputBox"
        style={{ height: "30px", textAlign: "center" }}
        onChange={handleSearchChange}
      />
    </>
    
  );
}

export default PokemonFilterSearch;
