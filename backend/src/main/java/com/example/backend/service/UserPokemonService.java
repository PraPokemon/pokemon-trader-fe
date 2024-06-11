package com.example.backend.service;

import com.example.backend.model.UserPokemon;
import com.example.backend.repository.UserPokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPokemonService {

    @Autowired
    private UserPokemonRepository userPokemonRepository;

    public List<UserPokemon> getAllUserPokemons() {
        return userPokemonRepository.findAll();
    }

    public List<UserPokemon> getUserPokemonsByUserId(int userId) {
        return userPokemonRepository.findByUserId(userId);
    }

    public UserPokemon createUserPokemon(UserPokemon userPokemon) {
        return userPokemonRepository.save(userPokemon);
    }

    public UserPokemon updateUserPokemon(int id, UserPokemon userPokemonDetails) {
        UserPokemon userPokemon = userPokemonRepository.findById(id).orElse(null);
        if (userPokemon != null) {
            userPokemon.setUserId(userPokemonDetails.getUserId());
            userPokemon.setPokemonId(userPokemonDetails.getPokemonId());
            return userPokemonRepository.save(userPokemon);
        }
        return null;
    }

    public void deleteUserPokemon(int id) {
        userPokemonRepository.deleteById(id);
    }
}
