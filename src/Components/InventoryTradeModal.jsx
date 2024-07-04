import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from "../api/axiosConfig";

const InventoryTradeModal = ({ show, onHide, pokemon, handleTrade }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [minLevel, setMinLevel] = useState(0);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const response = await axios.get('/pokemons/all');
        setAllPokemons(response.data);
      } catch (error) {
        console.error("There was an error fetching the pokemons!", error);
      }
    };

    fetchAllPokemons();
  }, []);

  const handleConfirmTrade = () => {
    if (!selectedPokemon) {
      console.error("No target Pokemon selected.");
      return;
    }

    const trade = {
      initiatingUserId: 0, // Hardcoded as per the instruction
      receivingUserId: null, // Set as null to be accepted by another user
      status: "PENDING",
      tradeDetails: [
        {
          userPokemonId: pokemon.userPokemonId,
          targetPokemonId: selectedPokemon.id,
          direction: "SEND",
          minLevel: minLevel
        }
      ]
    };

    console.log("Trade details before sending to handleTrade:", trade);
    handleTrade(trade);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Trade Pokemon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl
            as="select"
            onChange={(e) => {
              const selected = allPokemons.find(p => p.id === parseInt(e.target.value));
              setSelectedPokemon(selected);
              console.log("Selected Pokemon:", selected); // Debugging log
            }}
          >
            <option>Select a Pokemon...</option>
            {allPokemons.map((poke) => (
              <option key={poke.id} value={poke.id}>
                {poke.name}
              </option>
            ))}
          </FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Min Level:</InputGroup.Text>
          <FormControl
            type="number"
            value={minLevel}
            onChange={(e) => setMinLevel(e.target.value)}
          />
        </InputGroup>
        <Button variant="primary" onClick={handleConfirmTrade}>
          Confirm Trade
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default InventoryTradeModal;
