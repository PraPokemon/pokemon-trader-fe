import React, { createContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../api/axiosConfig";
import SignupModal from "./SignUpModal";

function LoginModal({ onLoginSuccess }) {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLoginClose = () => setShowLoginModal(false);
  const han = () => setShowLoginModal(true);
  const handleSignupClose = () => setShowSignupModal(false);
  const handleSignupShow = () => setShowSignupModal(true);

  const handleLogin = async () => {
    console.log("Attempting login with username:", username);
    try {
      
      const response = await axios.post("/users/login", { username, password });
      
      if (response.status === 200) {
        // console.log('Login successful:', response.data," THat was the responce data");
        localStorage.setItem('username', username);

        setShowLoginModal(false);
        onLoginSuccess(username);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password");
    }
  };

  const handleSignupClick = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  return (
    <>
      <Modal
        show={showLoginModal}
        onHide={handleLoginClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Lord-Helix"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Link to="#" onClick={handleSignupClick}>
            Sign Up
          </Link>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <SignupModal show={showSignupModal} onHide={handleSignupClose} />
    </>
  );
}

export default LoginModal;
