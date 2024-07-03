import React, { useState } from "react";
import AddToInventoryButton from "./AddToInventoryButton";

function Card({ pokemon, loading }) {
  

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
          >
            {/* <AddToInventoryButton pokemon={item} className="ContainerButon"> */}
            <button className="ContainerButon">
              <h1>{item.id}</h1>
              <h2>{item.name}</h2>
              <div className="TypesPokedex">
                {item.types.map((type) => (
                  <h4 key={type.name}>{type.name}</h4>
                ))}
              </div>
              <div className="PokemonIcon">
                {item.sprites && item.sprites.front_default ? (
                  <img src={item.sprites.front_default} alt={item.id} />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              </button>
              {/* </AddToInventoryButton> */}
          </div>
        ))
      )}
    </>
  );
}

export default Card;
