import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarPokemon() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    const interval = setInterval(() => {
      const newUsername = localStorage.getItem('username');
      if (newUsername !== username) {
        setUsername(newUsername);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('sessionToken');
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="PokemonNavbar "
      >
        <Container>
          <Navbar.Brand as={Link} to="/">Poketrader</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Pokedex">Pokedex</Nav.Link>
              <Nav.Link as={Link} to="/Inventory">Inventory</Nav.Link>
            </Nav>
            <Navbar.Text className="ms-auto text-yellow">
            <a href="#" onClick={handleLogout}>Signed in as: {username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPokemon;
