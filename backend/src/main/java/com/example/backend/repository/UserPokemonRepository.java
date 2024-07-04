package com.example.backend.repository;

import com.example.backend.model.UserPokemon;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserPokemonRepository extends MongoRepository<UserPokemon, Integer> {
    List<UserPokemon> findByUserId(int userId);

    @Query("{ 'pokemonId': ?0, 'level': { $gte: ?1 } }")
    List<UserPokemon> findMatchingUserPokemons(int pokemonId, int minLevel);
}
