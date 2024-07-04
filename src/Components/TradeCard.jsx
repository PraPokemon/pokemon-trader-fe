import React from 'react';
import './TradeCard.css';

const TradeCard = ({ trade, onClick }) => {
    const tradeDetails = trade.tradeDetails[0]; // Assuming there is only one trade detail per trade

    return (
        <div className="trade-card" onClick={() => onClick(trade)}>
            <h3>Trade ID: {trade._id}</h3>
            <p>Initiating User ID: {trade.initiatingUserId}</p>
            <p>Receiving User ID: {trade.receivingUserId}</p>
            <p>Status: {trade.status}</p>
            <p>Pokemon Offered: {tradeDetails.userPokemonId}</p>
            <p>Pokemon Requested: {tradeDetails.targetPokemonId}</p>
            <p>Minimum Level: {tradeDetails.minLevel}</p>
            <button onClick={(e) => { e.stopPropagation(); onClick(trade); }}>Accept Trade</button>
        </div>
    );
};

export default TradeCard;
