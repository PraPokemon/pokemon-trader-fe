package com.example.backend.repository;

import com.example.backend.model.Trade;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TradeRepository extends MongoRepository<Trade, Integer> {
}

