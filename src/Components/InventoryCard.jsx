import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from "../api/axiosConfig";
import InventoryModal from './InventoryModal';
import InventoryTradeModal from './InventoryTradeModal';

const InventoryCard = ({ userId = 0, pokemon, setPokemons }) => {
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
            if (response.data && response.data.pokemons) {
                setInventory(response.data.pokemons);
            }
        } catch (error) {
            console.error("There was an error fetching the inventory!", error);
        }
    };

    const cardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openTradeModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsTradeModalOpen(true);
    };

    const closeTradeModal = () => {
        setIsTradeModalOpen(false);
        setSelectedPokemon(null);
    };

    const handleTrade = async (trade) => {
        try {
            console.log('Trade to be created:', trade);
            const response = await axios.post('/trades', trade);
            console.log('Trade created:', response.data);

            // Remove the traded Pokemon from the user's inventory in the UI
            setInventory(prev => {
                const updatedInventory = prev.filter(p => p.userPokemonId !== trade.tradeDetails[0].userPokemonId);
                console.log('Updated Inventory:', updatedInventory);
                return updatedInventory;
            });
            closeTradeModal(); // Close the trade modal after successful trade
        } catch (error) {
            console.error('There was an error creating the trade!', error);
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
                pokemon={selectedPokemon}
                handleTrade={handleTrade}
            />
        </div>
    );
}

export default InventoryCard;
