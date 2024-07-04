import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../api/axiosConfig";

function TradeOfferModal({ children, trade }) {
  const [show, setShow] = useState(false);
  const [matchingPokemons, setMatchingPokemons] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    fetchMatchingPokemons();
    setShow(true);
  };

  const fetchMatchingPokemons = async () => {
    try {
      const response = await axios.get(`/userpokemons/matching/${trade.tradeDetails[0].targetPokemonId}/${trade.tradeDetails[0].minLevel}`);
      setMatchingPokemons(response.data);
    } catch (error) {
      console.error("Error fetching matching pokemons:", error);
    }
  };

  const acceptTrade = async (acceptingUserPokemonId) => {
    try {
      await axios.post(`/trades/${trade._id}/accept`, {
        acceptingUserId: 1, // Replace with the actual user ID
        acceptingUserPokemonId
      });
      handleClose();
    } catch (error) {
      console.error("Error accepting trade:", error);
    }
  };

  return (
    <>
      <div onClick={handleShow} className="ContainerButon" style={{ cursor: "pointer" }}>
        {children}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trade Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="TradeOfferGrid">
            <div>Requirements: {trade.tradeDetails[0].targetPokemonId} Level: {trade.tradeDetails[0].minLevel}</div>
          </div>
          <hr />
          <div>
            Your Pokemon that meet the requirements:
            <ul>
              {matchingPokemons.map((pokemon) => (
                <li key={pokemon.userPokemonId}>
                  {pokemon.name} (Level: {pokemon.level})
                  <button onClick={() => acceptTrade(pokemon.userPokemonId)}>Trade</button>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TradeOfferModal;
