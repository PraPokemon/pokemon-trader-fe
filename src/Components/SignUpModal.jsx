import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "../api/axiosConfig";

function SignupModal({ show, onHide }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setMessage('');
    onHide();
  };

  const handleSignup = () => {
    axios.post("/users/signup", { username, password })
      .then(response => {
        setMessage(response.data);
        handleClose();
      })
      .catch(error => {
        // Check if the error response has a message or default to a generic error message
        const errorMessage = error.response && error.response.data && error.response.data.message 
                             ? error.response.data.message 
                             : 'An error occurred. Please try again.';
        setMessage(errorMessage);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPassword5">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
        {message && <div className="alert alert-info">{message}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignupModal;
