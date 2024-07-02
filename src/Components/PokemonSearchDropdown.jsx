import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchableDropdown = ({ options, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);
        const filtered = options.filter(option =>
            option.toLowerCase().includes(searchValue)
        );
        setFilteredOptions(filtered);
    };

    const handleItemClick = (option) => {
        onSelect(option);
        setSearchTerm('');
    };

    return (
        <DropdownButton id="dropdown-item-button" title="Select Pokemon" className="mt-3">
            <InputGroup>
                <FormControl
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </InputGroup>
            <Dropdown.Divider />
            {filteredOptions.map((option, index) => (
                <Dropdown.Item
                    key={index}
                    as="button"
                    onClick={() => handleItemClick(option)}
                >
                    {option}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};
//xddddddddddddddddd
export default SearchableDropdown;
