package com.example.backend.repository;

import com.example.backend.model.Pokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PokemonRepository extends MongoRepository<Pokemon, Integer> {
}

