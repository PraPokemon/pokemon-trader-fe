package com.example.backend.service;

import com.example.backend.model.UserPokemon;
import com.example.backend.repository.UserPokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserPokemonService {

    @Autowired
    private UserPokemonRepository userPokemonRepository;
    
    @Autowired
    private SequenceService sequenceService;

    public List<UserPokemon> getAllUserPokemons() {
        return userPokemonRepository.findAll();
    }

    public List<UserPokemon> getUserPokemonsByUserId(int userId) {
        return userPokemonRepository.findByUserId(userId);
    }

    public UserPokemon createUserPokemon(UserPokemon userPokemon) {
    	if (userPokemon.getUserPokemonId() == 0) {
            userPokemon.setUserPokemonId(sequenceService.getNextSequence("userPokemon_sequence"));
        }
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
    public String getPokemonItemName(int userPokemonId) {
        Optional<UserPokemon> userPokemonOpt = userPokemonRepository.findById(userPokemonId);
        if (userPokemonOpt.isPresent()) {
            UserPokemon userPokemon = userPokemonOpt.get();
            return userPokemon.getItem() != null ? userPokemon.getItem().getName() : null;
        }
        return null;
    }
}
