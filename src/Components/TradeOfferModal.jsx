import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TradeOfferModal({ children, pokemon }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        onClick={handleShow}
        className="ContainerButon"
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="TradeOfferGrid">
            <div className="TradeOfferImage">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.id}
              />
            </div>
            <div className="TradeOfferReqirements">
              
              <h5>Requierments</h5>
              <h5>Pokemon: Scolipied</h5>
              <h5>lvl: 100</h5>
            </div>
            <div className="TradeOfferPokemonDiscription">
            <h4>details</h4>
              <h5>Pokemon: Scolipied</h5>
              <h5>lvl: 10</h5>
              <h5>Player: Farquad</h5>
              <h5>Item: MaryBeary</h5>
            </div>
          </div>
          <hr/>
          <div> your pokemon that meet the requiements</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TradeOfferModal;
