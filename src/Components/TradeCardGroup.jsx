import React, { useEffect, useState } from 'react';
import axios from '../api/axiosConfig';
import TradeCard from './TradeCard';

const TradeCardGroup = ({ minLevel, maxLevel, searchTerm }) => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        const fetchPendingTrades = async () => {
            try {
                const response = await axios.get('/trades/pending');
                setTrades(response.data);
            } catch (error) {
                console.error("Error fetching pending trades:", error);
            }
        };

        fetchPendingTrades();
    }, []);

    const handleAcceptTrade = async (trade) => {
        try {
            await axios.post(`/trades/${trade._id}/accept`, {
                acceptingUserId:0 /* your user id */,
                acceptingUserPokemonId:2 /* your pokemon id */
            });
            // Optionally, you can update the state to remove the accepted trade
            setTrades(trades.filter(t => t._id !== trade._id));
        } catch (error) {
            console.error("Error accepting trade:", error);
        }
    };

    return (
        <div className="trade-card-group">
            {trades.map((trade) => (
                <TradeCard key={trade._id} trade={trade} onClick={handleAcceptTrade} />
            ))}
        </div>
    );
};

export default TradeCardGroup;
