import React from "react";
import PokemonFilterSerch from "./PokemonFilterSerch";

function FilterGroup({ setSearchTerm }) {
  return (
    <div>
      <PokemonFilterSerch setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default FilterGroup;
