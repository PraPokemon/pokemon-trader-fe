import React, { useState, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const PokemonSearchDropdown = ({ options, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef(null);

    const handleSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = options.filter(option =>
            option.toLowerCase().includes(searchValue)
        );
        setFilteredOptions(filtered);
        setShowDropdown(filtered.length > 0 && searchValue.length > 0);
    };

    const handleItemClick = (option) => {
        setSearchTerm(option); //updejtaj search sa selektanon opcijon
        onSelect(option);
        setShowDropdown(false); //zatvori dropdown nakon selektiranja
    };

    const handleInputFocus = () => {
        setShowDropdown(filteredOptions.length > 0 && searchTerm.length > 0);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 200); // delay skrivanja dropdowna jer neznan ni ja vise
    };

    return (
        <Dropdown show={showDropdown} drop="start" onClose={() => setShowDropdown(false)}>
            <InputGroup>
                <FormControl
                    ref={inputRef}
                    placeholder="Search Pokemon..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <Dropdown.Menu
                    show={showDropdown}
                    align="start"
                    style={{ minWidth: '100%', marginTop: '38px' }}
                >
                    {filteredOptions.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            as="button"
                            onClick={() => handleItemClick(option)}
                        >
                            {option}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </InputGroup>
        </Dropdown>
    );
};

export default PokemonSearchDropdown;
