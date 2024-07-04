package com.example.backend.repository;

import com.example.backend.model.Trade;
import com.example.backend.model.TradeStatus;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TradeRepository extends MongoRepository<Trade, Integer> {

	List<Trade> findByStatus(TradeStatus pending);
}

