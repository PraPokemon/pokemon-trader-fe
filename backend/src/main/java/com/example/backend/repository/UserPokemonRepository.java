package com.example.backend.repository;

import com.example.backend.model.UserPokemon;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPokemonRepository extends MongoRepository<UserPokemon,Integer>{

}
