import React, { useState } from "react";
import AddToInventoryButon from "./AddToInventoryButon";

function Card({ pokemon, loading }) {
  const [expansionStates, setExpansionStates] = useState({});

  const handleExpandClick = (itemId) => {
    setExpansionStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon.map((item) => {
          return (
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
                    <h4>{type.type.name}</h4>
                  ))}
                </div>
                <img src={item.sprites.front_default} alt={item.id} />
              </button>

              {expansionStates[item.id] && (
                <div className="ContainerButon">
                  <div className="TypesPokedex">
                    <h4>Abilities: </h4>
                    {item.abilities.map((abilities) => (
                      <h5>{abilities.ability.name}</h5>
                    ))}
                  </div>
                  <div>
                    <h4>height: </h4>
                    <h4>{item.height} ft</h4>
                  </div>
                  <div>
                    <h4>Weight: </h4>
                    <h4>{item.weight} lb</h4>
                  </div>
                  <AddToInventoryButon/>
                </div>
              )}
            </div>
          );
        })
      )}
    </>
  );
}

export default Card;
