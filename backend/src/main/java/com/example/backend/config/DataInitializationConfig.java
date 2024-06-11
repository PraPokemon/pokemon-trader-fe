//package com.example.backend.config;
//
//import com.example.backend.model.Pokemon;
//import com.example.backend.repository.PokemonRepository;
//import com.example.backend.service.PokemonDataFetcherService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class DataInitializationConfig {
//
//    @Autowired
//    private PokemonRepository pokemonRepository;
//
//    @Autowired
//    private PokemonDataFetcherService pokemonDataFetcherService;
//
//    @Bean
//    CommandLineRunner initDatabase() {
//        return args -> {
//            // Clear existing data
//            pokemonRepository.deleteAll();
//
//            // Fetch and insert Pokémon data
//            int totalPokemons = pokemonDataFetcherService.getTotalPokemonCount();
//            for (int i = 1; i <= totalPokemons; i++) {
//                Pokemon pokemon = pokemonDataFetcherService.fetchPokemonData(i);
//                if (pokemon != null) {
//                    pokemonRepository.save(pokemon);
//                }
//            }
//        };
//    }
//}
