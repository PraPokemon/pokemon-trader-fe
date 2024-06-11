package com.example.backend.repository;

import com.example.backend.model.TradeDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TradeDetailsRepository extends MongoRepository<TradeDetails, Integer> {
    List<TradeDetails> findByTradeId(int tradeId);
}
