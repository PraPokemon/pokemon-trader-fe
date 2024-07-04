import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from "../api/axiosConfig";

const InventoryTradeModal = ({ show, onHide, onConfirmTrade }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [minLevel, setMinLevel] = useState(0);

    useEffect(() => {
        fetchAllPokemons();
    }, []);

    useEffect(() => {
        filterPokemons(searchTerm);
    }, [searchTerm]);

    const fetchAllPokemons = async () => {
        try {
            const response = await axios.get(`/pokemons/all`);
            console.log('All Pokemons:', response.data); // Log all pokemons
            setSearchResults(response.data);
        } catch (error) {
            console.error("There was an error fetching the pokemons!", error);
        }
    };

    const filterPokemons = (term) => {
        if (term === '') {
            fetchAllPokemons();
        } else {
            setSearchResults(prevResults => prevResults.filter(pokemon => 
                pokemon.name.toLowerCase().includes(term.toLowerCase())
            ));
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePokemonSelect = (pokemon) => {
        setSelectedPokemon(pokemon);
        setSearchTerm(pokemon.name);
        setSearchResults([]);
    };

    const handleConfirmTrade = () => {
        if (selectedPokemon) {
            onConfirmTrade(selectedPokemon, minLevel);
        }
    };
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Trade Pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Pokemon..."
                        aria-label="Search Pokemon"
                        aria-describedby="basic-addon2"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </InputGroup>
                {searchResults.length > 0 && (
                    <ul className="list-group">
                        {searchResults.map((pokemon) => (
                            <li
                                key={pokemon._id}
                                className="list-group-item"
                                onClick={() => handlePokemonSelect(pokemon)}
                            >
                                {pokemon.name}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="mt-3">
                    <label>LVL:</label>
                    <FormControl
                        type="number"
                        value={minLevel}
                        onChange={(e) => setMinLevel(e.target.value)}
                        min="0"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirmTrade}>
                    Confirm Trade
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InventoryTradeModal;
