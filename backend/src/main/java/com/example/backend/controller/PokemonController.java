package com.example.backend.controller;

import com.example.backend.model.Pokemon;

import com.example.backend.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/pokemons")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping
    public Map<String, Object> getAllPokemons(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(value = "name", required = false) String name
    ) {
        Page<Pokemon> pageResult = pokemonService.getFilteredPokemons(page, size, name);
        Map<String, Object> response = new HashMap<>();
        response.put("results", pageResult.getContent());
        response.put("totalPages", pageResult.getTotalPages());
        response.put("currentPage", pageResult.getNumber());
        return response;
    }

    @GetMapping("/{id}")
    public Optional<Pokemon> getPokemonById(@PathVariable int id) {
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
    @GetMapping("/{pokemonId}/moves")
    public List<Pokemon.Move> getMovesByPokemonId(@PathVariable int pokemonId) {
        Pokemon pokemon = pokemonService.getPokemonById(pokemonId).orElseThrow(() -> new RuntimeException("Pokemon not found"));
        return pokemon.getMoves();
    }
    @GetMapping("/name/{name}")
    public Optional<Pokemon> getPokemonByName(@PathVariable String name) {
        return pokemonService.getPokemonByName(name);
    }
}
