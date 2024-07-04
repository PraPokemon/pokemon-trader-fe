import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from "../api/axiosConfig";

const InventoryModal = ({ show, onHide, pokemon, onTrade }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [evolutionDetails, setEvolutionDetails] = useState([]);

    useEffect(() => {
        if (pokemon) {
            fetchPokemonDetails(pokemon.pokemonId);
            console.log(pokemon.pokemonId);
        }
    }, [pokemon]);

    const fetchPokemonDetails = async (pokemonId) => {
        try {
            const response = await axios.get(`/pokemons/${pokemonId}`);
            const details = response.data;
            setPokemonDetails(details);
            fetchEvolutionDetails(details.evolutions);
        } catch (error) {
            console.error("There was an error fetching the pokemon details!", error);
        }
    };

    const fetchEvolutionDetails = async (evolutionNames) => {
        try {
            if (evolutionNames) {
                const evolutionPromises = evolutionNames.map(name => axios.get(`/pokemons/name/${name}`));
                const evolutionResponses = await Promise.all(evolutionPromises);
                const evolutions = evolutionResponses.map(response => response.data);
                setEvolutionDetails(evolutions);
            }
        } catch (error) {
            console.error("There was an error fetching the evolution details!", error);
        }
    };

    if (!pokemonDetails) {
        return null;
    }

    const { name, types, flavorText } = pokemonDetails;

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Pokemon Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center">
                            <Col className="text-center mb-3">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonId}.png`} alt={name} className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Level:</strong> {pokemon.level}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="mb-3">
                            <Col>
                                <p><strong>Pokedex Number:</strong> #{pokemon.pokemonId}</p>
                                <p><strong>Type:</strong> {types ? types.map(type => type.name).join(', ') : 'Unknown'}</p>
                                <p><strong>Item Held:</strong> {pokemon.itemHeld || "None"}</p>
                                <p><strong>Moves:</strong> {pokemon.moves ? pokemon.moves.map(move => move.name).join(', ') : 'None'}</p>
                                <p>{flavorText}</p>
                                <div className="d-flex justify-content-end">
                                    <Button variant="primary" onClick={() => onTrade(pokemon)}>
                                        Trade
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row className="mt-4 justify-content-center">
                    <p><strong>Evolution Chain</strong></p>
                    {evolutionDetails.length > 0 ? evolutionDetails.map((evolution, index) => (
                        <Col key={index} xs="auto" className="mb-3">
                            <Card style={{ width: '10rem', cursor: 'pointer' }}>
                                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`} style={{ maxHeight: '8rem', objectFit: 'contain' }} />
                                <Card.Body>
                                    <Card.Title className="text-center">{evolution.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) : <p>No evolutions available</p>}
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default InventoryModal;
