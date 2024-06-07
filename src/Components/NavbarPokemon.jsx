import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavbarPokemon() {
  return (
    <>
      <Navbar
        expand="lg"
        className="PokemonNavbar bg-body-tertiary"
        bg="primary"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/Trading">Poketrader</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Pokedex">Pokedex</Nav.Link>
              <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
            </Nav>
            <Navbar.Text>
              {/* Promjeni kada se setupaju baze za koriniske */}
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPokemon;
