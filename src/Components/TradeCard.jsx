import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import TradeOfferModal from "./TradeOfferModal";

function TradeCard({ pokemon, loading }) {
  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon?.map((item) => {
          return (
            <div className="Container" key={item.id}>
              <TradeOfferModal pokemon={item}>
                <h1>{item.id}</h1>
                <h3>{item.name}</h3>
                <div className="TypesPokedex">
                  {item.types.map((type) => (
                    <h4>{type.type.name}</h4>
                  ))}
                </div>
                <h3>player name</h3>
                <div className="PokemonIcon">
                  <img src={item.sprites.front_default} alt={item.id} />
                </div>
              </TradeOfferModal>
            </div>
          );
        })
      )}
    </>
  );
}

export default TradeCard;
