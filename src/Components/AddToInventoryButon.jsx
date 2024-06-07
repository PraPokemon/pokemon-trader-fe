import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function addToInventoryButon() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Button className="ButonBasic" variant="primary" onClick={handleShow}>
        Add to inventory
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3"F controlId="exampleForm.ControlInput1">
              <Form.Label>Pokemon mooves</Form.Label>
              <Form.Control
                placeholder="Tackle"
              />
        </Form.Group>
        <Form.Group className="mb-3"F controlId="exampleForm.ControlInput1">
              <Form.Label>Lvl</Form.Label>
              <Form.Control
                placeholder="33"
              />
        </Form.Group>
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

export default addToInventoryButon;
