package com.example.backend.controller;

import com.example.backend.model.TradeDetails;
import com.example.backend.service.TradeDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tradeDetails")
public class TradeDetailsController {

    @Autowired
    private TradeDetailsService tradeDetailsService;

    @GetMapping
    public List<TradeDetails> getAllTradeDetails() {
        return tradeDetailsService.getAllTradeDetails();
    }

    @GetMapping("/{id}")
    public TradeDetails getTradeDetailsById(@PathVariable int id) {
        return tradeDetailsService.getTradeDetailsById(id);
    }

    @GetMapping("/trade/{tradeId}")
    public List<TradeDetails> getTradeDetailsByTradeId(@PathVariable int tradeId) {
        return tradeDetailsService.getTradeDetailsByTradeId(tradeId);
    }

    @PostMapping
    public TradeDetails createTradeDetails(@RequestBody TradeDetails tradeDetails) {
        return tradeDetailsService.createTradeDetails(tradeDetails);
    }

    @PutMapping("/{id}")
    public TradeDetails updateTradeDetails(@PathVariable int id, @RequestBody TradeDetails tradeDetailsDetails) {
        return tradeDetailsService.updateTradeDetails(id, tradeDetailsDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTradeDetails(@PathVariable int id) {
        tradeDetailsService.deleteTradeDetails(id);
    }
    
}
