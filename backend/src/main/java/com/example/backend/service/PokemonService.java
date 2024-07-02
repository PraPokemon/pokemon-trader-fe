package com.example.backend.service;

import com.example.backend.model.Pokemon;
import com.example.backend.repository.PokemonRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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
    

    public Page<Pokemon> getFilteredPokemons(int page, int size, String name) {
        List<Pokemon> allPokemons = pokemonRepository.findAll();
        List<Pokemon> filteredPokemons = allPokemons.stream()
                .filter(p -> name == null || p.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());

        int start = Math.min(page * size, filteredPokemons.size());
        int end = Math.min((page + 1) * size, filteredPokemons.size());
        List<Pokemon> paginatedPokemons = filteredPokemons.subList(start, end);

        return new PageImpl<>(paginatedPokemons, PageRequest.of(page, size), filteredPokemons.size());
    }
}
