import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PokemonDropdown = ({ selectedItem, handleItemClick }) => {
    return (
        <DropdownButton id="dropdown-item-button" title={selectedItem} className="mt-3">
            <Dropdown.Item as="button" onClick={handleItemClick} className="bg-primary text-white">Pikachu</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleItemClick} className="bg-secondary text-white">Raichu</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleItemClick} className="bg-info text-white">Nesto drugo</Dropdown.Item>
        </DropdownButton>
    );
};
//lol
export default PokemonDropdown;