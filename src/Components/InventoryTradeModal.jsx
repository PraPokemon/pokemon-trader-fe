import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import PokemonDropdown from './PokemonDropdown';
import SetLevel from './SetLevel';
import SearchableDropdown from './PokemonSearchDropdown';

const InventoryTradeModal = ({show, onHide, image, pokemonList}) => { //pokemonlist valjda api

    const [selectedItem, setSelectedItem] = useState('Select Pokemon');

    const handleItemClick = (event) => {
        setSelectedItem(event.target.textContent.trim()); 
    }

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Trade Pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Chose Pokemon: </h5>
                <PokemonDropdown selectedItem={selectedItem} handleItemClick={handleItemClick}/>
                <br />
                <h5>LVL: </h5>
                <SetLevel />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Link to="/">
                    <Button variant="primary">
                        Confirm Trade
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};
export default InventoryTradeModal;