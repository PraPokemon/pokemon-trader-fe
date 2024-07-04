package com.example.backend.service;

import com.example.backend.model.UserInventory;
import com.example.backend.model.UserPokemon;
import com.example.backend.repository.UserInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserInventoryService {

    @Autowired
    private UserInventoryRepository userInventoryRepository;

    @Autowired
    private SequenceService sequenceService;

    @Autowired
    private UserPokemonService userPokemonService;

    public List<UserInventory> findAll() {
        return userInventoryRepository.findAll();
    }

    public Optional<UserInventory> findById(int id) {
        return userInventoryRepository.findById(id);
    }

    public UserInventory save(UserInventory userInventory) {
        if (userInventory.getId() == 0) {
            userInventory.setId(sequenceService.getNextSequence("userInventory_sequence"));
        }
        return userInventoryRepository.save(userInventory);
    }

    public void deleteById(int id) {
        userInventoryRepository.deleteById(id);
    }

    public UserInventory update(UserInventory userInventory) {
        return userInventoryRepository.save(userInventory);
    }

    public UserInventory addPokemonToInventory(int userId, UserPokemon userPokemon) {
        if (userPokemon.getUserPokemonId() == 0) {
            userPokemon.setUserPokemonId(sequenceService.getNextSequence("userPokemon_sequence"));
        }

        Optional<UserInventory> optionalUserInventory = userInventoryRepository.findByUserId(userId);
        UserInventory userInventory;
        if (optionalUserInventory.isPresent()) {
            userInventory = optionalUserInventory.get();
        } else {
            userInventory = new UserInventory();
            userInventory.setId(sequenceService.getNextSequence("userInventory_sequence"));
            userInventory.setUserId(userId);
            userInventory.setPokemons(new ArrayList<>());
        }

        userInventory.getPokemons().add(userPokemon);
        userPokemonService.createUserPokemon(userPokemon); // Save UserPokemon separately

        // Debugging: Print the userInventory object before saving
        System.out.println("Saving UserInventory: " + userInventory);

        return userInventoryRepository.save(userInventory);
    }

	public Optional<UserInventory> findByUserId(int userId) {
		return userInventoryRepository.findByUserId(userId);
	}
}
