import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarPokemon() {
  const [Username, setUsername] = useState("User not found");

  const pokeballIcon = "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-6/128/pokemon-pokeball-512.png";

  return (
    <>
      <Navbar
        expand="lg"
        className="PokemonNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="BrandName">
              <img
                src={pokeballIcon}
                alt="Pokeball Icon"
                style={{ width: '30px', height: '30px', marginRight: '10px', marginBottom: '5px' }}
              />
              Poketrader
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Pokedex" className="NavLink">Pokedex</Nav.Link>
              <Nav.Link as={Link} to="/Inventory" className="NavLink">Inventory</Nav.Link>
            </Nav>
            <Navbar.Text className="ms-auto text-yellow">
              Signed in as: <a href="#login">{Username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPokemon;
