import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "../api/axiosConfig";

function AddToInventoryButton({ pokemon, children }) {
  const [show, setShow] = useState(false);
  const [moves, setMoves] = useState([]);
  const [selectedMoves, setSelectedMoves] = useState(["", "", "", ""]);
  const [sliderValue, setSliderValue] = useState(50);
  const [message, setMessage] = useState('');

  const userId = 0; // Temporary hard-coded userId

  const handleClose = () => {
    setMessage('');
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    fetchMoves();
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleMoveChange = (index, event) => {
    const newSelectedMoves = [...selectedMoves];
    newSelectedMoves[index] = event.target.value;
    setSelectedMoves(newSelectedMoves);
  };

  const handleSave = () => {
    const userPokemon = {
      userId: userId,
      pokemonId: pokemon.id,
      level: sliderValue,
      moves: selectedMoves.filter(move => move) // Filter out empty moves
    };

    axios.post(`/userInventories/${userId}/addPokemon`, userPokemon)
      .then(response => {
        setMessage("Pokemon added to inventory successfully!");
        handleClose();
      })
      .catch(error => {
        const errorMessage = error.response && error.response.data && error.response.data.message 
                             ? error.response.data.message 
                             : 'An error occurred. Please try again.';
        setMessage(errorMessage);
      });
  };

  const fetchMoves = () => {
    axios.get(`/pokemons/${pokemon.id}/moves`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setMoves(response.data);
        } else {
          setMoves([]);
          console.error("Fetched moves are not an array:", response.data);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the moves!", error);
        setMoves([]);
      });
  };

  const renderMoveOptions = () => {
    if (!Array.isArray(moves)) {
      return null;
    }
    return moves.map((move, index) => (
      <option key={index} value={move.name}>
        {move.name}
      </option>
    ));
  };

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
          <Modal.Title>Add Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Moves</Form.Label>
          {selectedMoves.map((move, index) => (
            <Form.Select
              key={index}
              aria-label="Default select example"
              value={move}
              onChange={(e) => handleMoveChange(index, e)}
              style={{ margin: "5px" }}
            >
              <option value="">Open this select menu</option>
              {renderMoveOptions()}
            </Form.Select>
          ))}
          <div className="outer">
            <div>
              <Form.Label>Level Slider</Form.Label>
              <p>LVL: {sliderValue}</p>
              <Form.Range
                value={sliderValue}
                name="level"
                onChange={handleSliderChange}
                className="custom-slider"
              />
            </div>
          </div>
          {message && <div className="alert alert-info">{message}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToInventoryButton;
