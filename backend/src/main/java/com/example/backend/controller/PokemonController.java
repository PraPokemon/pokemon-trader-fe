package com.example.backend.controller;

import com.example.backend.model.Pokemon;
import com.example.backend.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pokemons")
public class PokemonController {

    @Autowired
    private PokemonRepository pokemonRepository;

    @GetMapping
    public List<Pokemon> getAllPokemons() {
        return pokemonRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pokemon getPokemonById(@PathVariable int id) {
        return pokemonRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Pokemon createPokemon(@RequestBody Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }

    @PutMapping("/{id}")
    public Pokemon updatePokemon(@PathVariable int id, @RequestBody Pokemon pokemonDetails) {
        Pokemon pokemon = pokemonRepository.findById(id).orElse(null);
        if (pokemon != null) {
            pokemon.setName(pokemonDetails.getName());
            pokemon.setType(pokemonDetails.getType());
            pokemon.setLevel(pokemonDetails.getLevel());
            pokemon.setMove(pokemonDetails.getMove());
            pokemon.setFlavorText(pokemonDetails.getFlavorText());
            pokemon.setEvolutions(pokemonDetails.getEvolutions());
            return pokemonRepository.save(pokemon);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deletePokemon(@PathVariable int id) {
        pokemonRepository.deleteById(id);
    }
}
