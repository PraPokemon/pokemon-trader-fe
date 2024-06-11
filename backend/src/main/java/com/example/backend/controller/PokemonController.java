package com.example.backend.controller;

import com.example.backend.model.Pokemon;
import com.example.backend.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pokemons")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping
    public List<Pokemon> getAllPokemons() {
        return pokemonService.getAllPokemons();
    }

    @GetMapping("/{id}")
    public Pokemon getPokemonById(@PathVariable int id) {
        return pokemonService.getPokemonById(id);
    }

    @PostMapping
    public Pokemon createPokemon(@RequestBody Pokemon pokemon) {
        return pokemonService.createPokemon(pokemon);
    }

    @PutMapping("/{id}")
    public Pokemon updatePokemon(@PathVariable int id, @RequestBody Pokemon pokemonDetails) {
        return pokemonService.updatePokemon(id, pokemonDetails);
    }

    @DeleteMapping("/{id}")
    public void deletePokemon(@PathVariable int id) {
        pokemonService.deletePokemon(id);
    }
}
