package com.example.backend.service;

import com.example.backend.model.Trade;
import com.example.backend.model.TradeDetails;
import com.example.backend.model.TradeDirection;
import com.example.backend.model.TradeStatus;
import com.example.backend.model.UserInventory;
import com.example.backend.model.UserPokemon;
import com.example.backend.repository.TradeDetailsRepository;
import com.example.backend.repository.TradeRepository;
import com.example.backend.repository.UserInventoryRepository;
import com.example.backend.repository.UserPokemonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TradeService {

    @Autowired
    private TradeRepository tradeRepository;
    
    @Autowired
    private SequenceService sequenceService; 
    
    @Autowired
    private TradeDetailsRepository tradeDetailsRepository;
    
    @Autowired
    private UserInventoryRepository userInventoryRepository;
    
    @Autowired
    private UserPokemonRepository userPokemonRepository;
    
    

    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    public Trade getTradeById(int id) {
        return tradeRepository.findById(id).orElse(null);
    }
    
    public List<Trade> getPendingTrades() {
        return tradeRepository.findByStatus(TradeStatus.PENDING);
    }

    public Trade createTrade(Trade trade) {
        trade.setTradeId(sequenceService.getNextSequence("trade_sequence"));
        tradeRepository.save(trade);

        for (TradeDetails details : trade.getTradeDetails()) {
            details.setTradeDetailId(sequenceService.getNextSequence("trade_detail_sequence"));
            details.setTradeId(trade.getTradeId());
            tradeDetailsRepository.save(details);

            // Remove Pokemon from user's inventory
            Optional<UserInventory> userInventoryOpt = userInventoryRepository.findByUserId(trade.getInitiatingUserId());
            if (userInventoryOpt.isPresent()) {
                UserInventory userInventory = userInventoryOpt.get();
                userInventory.getPokemons().removeIf(pokemon -> pokemon.getUserPokemonId() == details.getUserPokemonId());
                userInventoryRepository.save(userInventory);
            }
        }

        return trade;
    }



    public Trade acceptTrade(int tradeId, int acceptingUserId, int acceptingUserPokemonId) {
        Trade trade = tradeRepository.findById(tradeId).orElseThrow(() -> new RuntimeException("Trade not found"));
        
        trade.setReceivingUserId(acceptingUserId);
        trade.setStatus(TradeStatus.COMPLETED);

        // Add the target pokemon to the accepting user's inventory
        UserPokemon newUserPokemon = new UserPokemon();
        newUserPokemon.setUserId(acceptingUserId);
        newUserPokemon.setPokemonId(trade.getTargetPokemonId());
        newUserPokemon.setLevel(trade.getTradeDetails().get(0).getMinLevel());
        userPokemonRepository.save(newUserPokemon);

        // Change the userId of the offered pokemon to the receiving user
        UserPokemon offeredPokemon = userPokemonRepository.findById(trade.getUserPokemonId()).get();
        offeredPokemon.setUserId(acceptingUserId);
        userPokemonRepository.save(offeredPokemon);

        tradeRepository.save(trade);
        return trade;
    }

    public Trade updateTrade(int id, Trade tradeDetails) {
        Trade trade = tradeRepository.findById(id).orElse(null);
        if (trade != null) {
            trade.setInitiatingUserId(tradeDetails.getInitiatingUserId());
            trade.setReceivingUserId(tradeDetails.getReceivingUserId());
            trade.setStatus(tradeDetails.getStatus());
            return tradeRepository.save(trade);
        }
        return null;
    }

    public void deleteTrade(int id) {
        tradeRepository.deleteById(id);
    }
}
