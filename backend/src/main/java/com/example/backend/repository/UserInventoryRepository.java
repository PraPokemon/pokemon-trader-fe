package com.example.backend.repository;

import com.example.backend.model.UserInventory;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserInventoryRepository extends MongoRepository<UserInventory, Integer> {

	Optional<UserInventory> findByUserId(int userId);
}
