package com.example.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.model.Items;

public interface ItemsRepository extends MongoRepository<Items,Integer>{

}
