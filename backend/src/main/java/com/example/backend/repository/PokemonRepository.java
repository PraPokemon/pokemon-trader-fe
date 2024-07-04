package com.example.backend.repository;

import com.example.backend.model.Pokemon;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PokemonRepository extends MongoRepository<Pokemon, Integer> {

	Optional<Pokemon> findByName(String name);
}

