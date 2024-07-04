package com.example.backend.controller;

import com.example.backend.model.Trade;
import com.example.backend.service.TradeService;

import lombok.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/pending")
    public ResponseEntity<List<Trade>> getPendingTrades() {
        List<Trade> pendingTrades = tradeService.getPendingTrades();
        return ResponseEntity.ok(pendingTrades);
    }
    @GetMapping("/{id}")
    public Trade getTradeById(@PathVariable int id) {
        return tradeService.getTradeById(id);
    }

    @PostMapping
    public ResponseEntity<Trade> createTrade(@RequestBody Trade trade) {
        Trade createdTrade = tradeService.createTrade(trade);
        return new ResponseEntity<>(createdTrade, HttpStatus.CREATED);
    }
    
    @PostMapping("/{tradeId}/accept")
    public ResponseEntity<Trade> acceptTrade(@PathVariable int tradeId, @RequestBody AcceptTradeRequest request) {
        Trade acceptedTrade = tradeService.acceptTrade(tradeId, request.getAcceptingUserId(), request.getAcceptingUserPokemonId());
        return ResponseEntity.ok(acceptedTrade);
    }

    @PutMapping("/{id}")
    public Trade updateTrade(@PathVariable int id, @RequestBody Trade tradeDetails) {
        return tradeService.updateTrade(id, tradeDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTrade(@PathVariable int id) {
        tradeService.deleteTrade(id);
    }
    @Data
    class AcceptTradeRequest {
    	
        private int acceptingUserId;
        private int acceptingUserPokemonId;
    }
}
