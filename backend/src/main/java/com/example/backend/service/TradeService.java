package com.example.backend.service;

import com.example.backend.model.Trade;
import com.example.backend.model.TradeDetails;
import com.example.backend.repository.TradeDetailsRepository;
import com.example.backend.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeService {

    @Autowired
    private TradeRepository tradeRepository;
    
    @Autowired
    private SequenceService sequenceService; 
    
    @Autowired
    private TradeDetailsRepository tradeDetailsRepository;

    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    public Trade getTradeById(int id) {
        return tradeRepository.findById(id).orElse(null);
    }

    public Trade createTrade(Trade trade) {
        trade.setTradeId(sequenceService.getNextSequence("trade_sequence"));
        tradeRepository.save(trade);

        for (TradeDetails details : trade.getTradeDetails()) {
            details.setTradeDetailId(sequenceService.getNextSequence("trade_detail_sequence"));
            details.setTradeId(trade.getTradeId());
            tradeDetailsRepository.save(details);
        }

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
