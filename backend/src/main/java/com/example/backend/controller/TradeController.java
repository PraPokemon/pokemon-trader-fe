package com.example.backend.controller;

import com.example.backend.model.Trade;
import com.example.backend.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trades")
public class TradeController {

    @Autowired
    private TradeService tradeService;

    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeService.getAllTrades();
    }

    @GetMapping("/{id}")
    public Trade getTradeById(@PathVariable int id) {
        return tradeService.getTradeById(id);
    }

    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        return tradeService.createTrade(trade);
    }

    @PutMapping("/{id}")
    public Trade updateTrade(@PathVariable int id, @RequestBody Trade tradeDetails) {
        return tradeService.updateTrade(id, tradeDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTrade(@PathVariable int id) {
        tradeService.deleteTrade(id);
    }
}
