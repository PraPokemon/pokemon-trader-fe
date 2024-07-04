import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from "../api/axiosConfig";
import InventoryModal from './InventoryModal';
import InventoryTradeModal from './InventoryTradeModal';

const InventoryCard = ({ userId = 0 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
    const [inventory, setInventory] = useState([]);
    
    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const response = await axios.get(`/userInventories/userId/${userId}`);
            console.log("API Response:", response.data); // Log the response data
            if (response.data && response.data.pokemons) {
                setInventory(response.data.pokemons);
                console.log("Inventory Set:", response.data.pokemons); // Log the inventory state
            } else {
                console.log("No pokemons found in the response.");
            }
        } catch (error) {
            console.error("There was an error fetching the inventory!", error);
        }
    };

    const cardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
        console.log("Selected Pokemon:", pokemon); // Log the selected pokemon
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openTradeModal = () => {
        setIsModalOpen(false);
        setIsTradeModalOpen(true);
    };

    const closeTradeModal = () => {
        setIsTradeModalOpen(false);
    };

    const handleConfirmTrade = async (pokemon, minLevel) => {
        try {
            const trade = {
                initiatingUserId: 0, // Hardcoded
                receivingUserId: null, 
                status: "PENDING", 
                tradeDetails: [{
                    userPokemonId: selectedPokemon.pokemonId,
                    direction: "SEND",
                    minLevel: minLevel
                }]
            };
            console.log("Trade payload:", trade); // Log the trade payload

            const response = await axios.post(`/trades`, trade);
            console.log("Trade created:", response.data);
            setIsTradeModalOpen(false);
        } catch (error) {
            console.error("There was an error creating the trade!", error);
        }
    };

    const cardStyle = {
        cursor: 'pointer',
        width: '120px',
        height: '120px',
        margin: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    };

    return (
        <div>
            <div style={rowStyle}>
                {inventory.length > 0 ? (
                    inventory.map((pokemon, idx) => (
                        <div key={idx} style={cardStyle} onClick={() => cardClick(pokemon)}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonId}.png`}
                                alt={pokemon.pokemonId}
                                style={{ width: '80px', height: '80px' }}
                            />
                        </div>
                    ))
                ) : (
                    <p>No Pokémon found in the inventory.</p>
                )}
            </div>
            {selectedPokemon && (
                <InventoryModal
                    show={isModalOpen}
                    onHide={closeModal}
                    pokemon={selectedPokemon}
                    onTrade={openTradeModal}
                />
            )}
            <InventoryTradeModal
                show={isTradeModalOpen}
                onHide={closeTradeModal}
                onConfirmTrade={handleConfirmTrade}
            />
        </div>
    );
}

export default InventoryCard;
