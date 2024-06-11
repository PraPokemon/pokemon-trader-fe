package com.example.backend.controller;

import com.example.backend.model.UserPokemon;
import com.example.backend.service.UserPokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userPokemons")
public class UserPokemonController {

    @Autowired
    private UserPokemonService userPokemonService;

    @GetMapping
    public List<UserPokemon> getAllUserPokemons() {
        return userPokemonService.getAllUserPokemons();
    }

    @GetMapping("/user/{userId}")
    public List<UserPokemon> getUserPokemonsByUserId(@PathVariable int userId) {
        return userPokemonService.getUserPokemonsByUserId(userId);
    }

    @PostMapping
    public UserPokemon createUserPokemon(@RequestBody UserPokemon userPokemon) {
        return userPokemonService.createUserPokemon(userPokemon);
    }

    @PutMapping("/{id}")
    public UserPokemon updateUserPokemon(@PathVariable int id, @RequestBody UserPokemon userPokemonDetails) {
        return userPokemonService.updateUserPokemon(id, userPokemonDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUserPokemon(@PathVariable int id) {
        userPokemonService.deleteUserPokemon(id);
    }
}
