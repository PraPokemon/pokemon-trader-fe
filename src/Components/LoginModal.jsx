import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function loginModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" F controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Lord-Helix" />
          </Form.Group>
          <Form.Group className="mb-3" F controlId="login">
            <Form.Label>Pasword</Form.Label>
            <Form.Control placeholder="*******" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default loginModal;
