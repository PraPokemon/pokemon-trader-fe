package com.example.backend.controller;

import com.example.backend.model.TradeDetails;
import com.example.backend.repository.TradeDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tradeDetails")
public class TradeDetailsController {

    @Autowired
    private TradeDetailsRepository tradeDetailsRepository;

    @GetMapping
    public List<TradeDetails> getAllTradeDetails() {
        return tradeDetailsRepository.findAll();
    }

    @GetMapping("/{id}")
    public TradeDetails getTradeDetailsById(@PathVariable int id) {
        return tradeDetailsRepository.findById(id).orElse(null);
    }

    @GetMapping("/trade/{tradeId}")
    public List<TradeDetails> getTradeDetailsByTradeId(@PathVariable int tradeId) {
        return tradeDetailsRepository.findByTradeId(tradeId);
    }

    @PostMapping
    public TradeDetails createTradeDetails(@RequestBody TradeDetails tradeDetails) {
        return tradeDetailsRepository.save(tradeDetails);
    }

    @PutMapping("/{id}")
    public TradeDetails updateTradeDetails(@PathVariable int id, @RequestBody TradeDetails tradeDetailsDetails) {
        TradeDetails tradeDetails = tradeDetailsRepository.findById(id).orElse(null);
        if (tradeDetails != null) {
            tradeDetails.setTradeId(tradeDetailsDetails.getTradeId());
            tradeDetails.setUserPokemonId(tradeDetailsDetails.getUserPokemonId());
            tradeDetails.setDirection(tradeDetailsDetails.getDirection());
            return tradeDetailsRepository.save(tradeDetails);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteTradeDetails(@PathVariable int id) {
        tradeDetailsRepository.deleteById(id);
    }
}
