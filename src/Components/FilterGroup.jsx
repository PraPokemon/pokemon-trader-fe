import React from "react";
import PokemonFilterSerch from "./PokemonFilterSerch";

function FilterGroup({ setSearchTerm }) {
  const imagePaths = [
    // "/bug_type_symbol_anime_by_jormxdos_dfgb667.png",
    // "/dark_type_symbol_anime_by_jormxdos_dfgb681.png",
    "/dragon_type_symbol_anime_by_jormxdos_dfgb67k.png",
    // "electric_type_symbol_anime_by_jormxdos_dfgb63a.png",
    // "fairy_type_symbol_anime_by_jormxdos_dfgb68s.png",
    // "fighting_type_symbol_anime_by_jormxdos_dfgb64b.png",
    // "fire_type_symbol_anime_by_jormxdos_dfgb62q.png",
    // "flying_type_symbol_anime_by_jormxdos_dfgb65f.png",
    // "ghost_type_symbol_anime_by_jormxdos_dfgb672.png",
    "grass_type_symbol_anime_by_jormxdos_dfgb63o.png",
    "ground_type_symbol_anime_by_jormxdos_dfgb653.png",
    // "ice_type_symbol_anime_by_jormxdos_dfgb63x.png",
    // "normal_type_symbol_anime_by_jormxdos_dfgb62b.png",
    "poison_type_symbol_anime_by_jormxdos_dfgb64q.png",
    // "psychic_type_symbol_anime_by_jormxdos_dfgb65w.png",
    // "rock_type_symbol_anime_by_jormxdos_dfgb66n.png",
    // "steel_type_symbol_anime_by_jormxdos_dfgb68e.png",
    "water_type_symbol_anime_by_jormxdos_dfgb62y.png",
  ];

  return (
    <>
      <div className="FilterTypeButonGroup">
        {imagePaths.map((filename, index) => (
          <button className="FilterTypeButon" key={index}>
            <img src={`/Images/${filename}`} style={{ width: "120px" }} />
          </button>
        ))}
      </div>
      <div className="FilterGroupOther">
        <PokemonFilterSerch setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}

export default FilterGroup;
