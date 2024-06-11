package com.example.backend.repository;

import com.example.backend.model.UserPokemon;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface UserPokemonRepository extends MongoRepository<UserPokemon, Integer> {
    List<UserPokemon> findByUserId(int userId);
}
