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

  const handleClose = () => setShow(false);
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
      userId: 0, // Replace with the actual userId
      pokemonId: pokemon.id,
      level: sliderValue,
      moves: selectedMoves.filter(move => move) // Filter out empty moves
    };

    axios.post("/userPokemons", userPokemon)
      .then(response => {
        console.log("UserPokemon created:", response.data);
        handleClose();
      })
      .catch(error => {
        console.error("There was an error creating the UserPokemon!", error);
      });
  };

  const fetchMoves = () => {
    axios.get("/pokemons/moves")
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
      <div onClick={handleShow} className="ContainerButon" style={{ cursor: 'pointer' }}>
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
