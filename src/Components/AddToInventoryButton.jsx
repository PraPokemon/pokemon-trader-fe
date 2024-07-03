import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function addToInventoryButton({ pokemon, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const renderMoveOptions = (moves) => {
    return moves.map((move, index) => (
      <option key={index} value={move.move}>
        {move.move}
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
          <Form.Select
            aria-label="Default select example"
            id="move1"
            style={{ margin: "5px" }}
          >
            <option>Open this select menu</option>
            {pokemon && renderMoveOptions(pokemon.moves)}
          </Form.Select>

          <Form.Select
            aria-label="Default select example"
            id="move1"
            style={{ margin: "5px" }}
          >
            <option>Open this select menu</option>
            {pokemon && renderMoveOptions(pokemon.moves)}
          </Form.Select>

          <Form.Select
            aria-label="Default select example"
            id="move3"
            style={{ margin: "5px" }}
          >
            <option>Open this select menu</option>
            {pokemon && renderMoveOptions(pokemon.moves)}
          </Form.Select>

          <Form.Select
            aria-label="Default select example"
            id="move4"
            style={{ margin: "5px" }}
          >
            <option>Open this select menu</option>
            {pokemon && renderMoveOptions(pokemon.moves)}
          </Form.Select>

          <div className="outer">
            <div>
              <Form.Label>Level Slider</Form.Label>
              <p>LVL: {sliderValue}</p>{" "}
              <Form.Range
                value={sliderValue}
                name="hello"
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default addToInventoryButton;
