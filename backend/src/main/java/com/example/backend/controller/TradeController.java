package com.example.backend.controller;

import com.example.backend.model.Trade;
import com.example.backend.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trades")
public class TradeController {

    @Autowired
    private TradeRepository tradeRepository;

    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Trade getTradeById(@PathVariable int id) {
        return tradeRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        return tradeRepository.save(trade);
    }

    @PutMapping("/{id}")
    public Trade updateTrade(@PathVariable int id, @RequestBody Trade tradeDetails) {
        Trade trade = tradeRepository.findById(id).orElse(null);
        if (trade != null) {
            trade.setInitiatingUserId(tradeDetails.getInitiatingUserId());
            trade.setReceivingUserId(tradeDetails.getReceivingUserId());
            trade.setStatus(tradeDetails.getStatus());
            return tradeRepository.save(trade);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteTrade(@PathVariable int id) {
        tradeRepository.deleteById(id);
    }
}
