import React, { useState } from "react";
import AddToInventoryButton from "./AddToInventoryButton";

function Card({ pokemon, loading }) {
  const [expansionStates, setExpansionStates] = useState({});

  const handleExpandClick = (itemId) => {
    setExpansionStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  const handleExpandedContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon?.map((item) => (
          <div
            className="Container"
            key={item.id}
            onClick={() => handleExpandClick(item.id)}
          >
            <button className="ContainerButon">
              <h1>{item.id}</h1>
              <h2>{item.name}</h2>
              <div className="TypesPokedex">
                {item.types.map((type) => (
                  <h4 key={type.name}>{type.name}</h4>
                ))}
              </div>
              <div className="PokemonIcon">
                <img src={item.sprites?.front_default} alt={item.name} />
              </div>
            </button>
            {expansionStates[item.id] && (
              <div className="ContainerButon" onClick={handleExpandedContentClick}>
                <div className="TypesPokedex">
                  <h4>Abilities: </h4>
                  {item.abilities.map((ability) => (
                    <h5 key={ability.ability.name}>{ability.ability.name}</h5>
                  ))}
                </div>
                <div>
                  <h4>Height: </h4>
                  <h4>{item.height} ft</h4>
                </div>
                <div>
                  <h4>Weight: </h4>
                  <h4>{item.weight} lb</h4>
                </div>
                <div>
                  <AddToInventoryButton pokemon={item} />
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default Card;
