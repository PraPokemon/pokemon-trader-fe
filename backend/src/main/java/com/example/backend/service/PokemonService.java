package com.example.backend.service;

import com.example.backend.model.Pokemon;
import com.example.backend.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    public Page<Pokemon> getAllPokemons(int page, int size) {
        return pokemonRepository.findAll(PageRequest.of(page, size));
    }
    public Pokemon getPokemonById(int id) {
        return pokemonRepository.findById(id).orElse(null);
    }

    public Pokemon createPokemon(Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }

    public Pokemon updatePokemon(int id, Pokemon pokemonDetails) {
        Pokemon pokemon = pokemonRepository.findById(id).orElse(null);
        if (pokemon != null) {
            pokemon.setName(pokemonDetails.getName());
            pokemon.setTypes(pokemonDetails.getTypes());
            pokemon.setBaseExperience(pokemonDetails.getBaseExperience());
            pokemon.setMoves(pokemonDetails.getMoves());
            pokemon.setFlavorText(pokemonDetails.getFlavorText());
            pokemon.setEvolutions(pokemonDetails.getEvolutions());
            return pokemonRepository.save(pokemon);
        }
        return null;
    }

    public void deletePokemon(int id) {
        pokemonRepository.deleteById(id);
    }
}
