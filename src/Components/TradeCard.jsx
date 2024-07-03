import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TradeOfferModal from "./TradeOfferModal";

function TradeCard({ pokemon, loading }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon.map((item) => {
          return (
            <div className="Container" key={item.id}>
              <Button
                className="ContainerButon"
                onClick={() => setModalShow(true)}
              >
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
                <div className="TypesPokedex">
                  {item.types.map((type) => (
                    <h4>{type.type.name}</h4>
                  ))}
                </div>
                <div className="PokemonIcon">
                  <img src={item.sprites.front_default} alt={item.id} />
                </div>
              </Button>

              <TradeOfferModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          );
        })
      )}
    </>
  );
}

export default TradeCard;
