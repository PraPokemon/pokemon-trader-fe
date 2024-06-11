package com.example.backend.service;

import com.example.backend.model.TradeDetails;
import com.example.backend.repository.TradeDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeDetailsService {

    @Autowired
    private TradeDetailsRepository tradeDetailsRepository;

    public List<TradeDetails> getAllTradeDetails() {
        return tradeDetailsRepository.findAll();
    }

    public TradeDetails getTradeDetailsById(int id) {
        return tradeDetailsRepository.findById(id).orElse(null);
    }

    public List<TradeDetails> getTradeDetailsByTradeId(int tradeId) {
        return tradeDetailsRepository.findByTradeId(tradeId);
    }

    public TradeDetails createTradeDetails(TradeDetails tradeDetails) {
        return tradeDetailsRepository.save(tradeDetails);
    }

    public TradeDetails updateTradeDetails(int id, TradeDetails tradeDetailsDetails) {
        TradeDetails tradeDetails = tradeDetailsRepository.findById(id).orElse(null);
        if (tradeDetails != null) {
            tradeDetails.setTradeId(tradeDetailsDetails.getTradeId());
            tradeDetails.setUserPokemonId(tradeDetailsDetails.getUserPokemonId());
            tradeDetails.setDirection(tradeDetailsDetails.getDirection());
            return tradeDetailsRepository.save(tradeDetails);
        }
        return null;
    }

    public void deleteTradeDetails(int id) {
        tradeDetailsRepository.deleteById(id);
    }
}
