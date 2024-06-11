package com.example.backend.controller;

import com.example.backend.model.UserPokemon;
import com.example.backend.repository.UserPokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userPokemons")
public class UserPokemonController {

    @Autowired
    private UserPokemonRepository userPokemonRepository;

    @GetMapping
    public List<UserPokemon> getAllUserPokemons() {
        return userPokemonRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<UserPokemon> getUserPokemonsByUserId(@PathVariable int userId) {
        return userPokemonRepository.findByUserId(userId);
    }

    @PostMapping
    public UserPokemon createUserPokemon(@RequestBody UserPokemon userPokemon) {
        return userPokemonRepository.save(userPokemon);
    }

    @PutMapping("/{id}")
    public UserPokemon updateUserPokemon(@PathVariable int id, @RequestBody UserPokemon userPokemonDetails) {
        UserPokemon userPokemon = userPokemonRepository.findById(id).orElse(null);
        if (userPokemon != null) {
            userPokemon.setUserId(userPokemonDetails.getUserId());
            userPokemon.setPokemonId(userPokemonDetails.getPokemonId());
            return userPokemonRepository.save(userPokemon);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteUserPokemon(@PathVariable int id) {
        userPokemonRepository.deleteById(id);
    }
}
