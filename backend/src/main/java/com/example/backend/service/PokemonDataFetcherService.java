package com.example.backend.service;

import com.example.backend.model.Pokemon;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PokemonDataFetcherService {

    private final RestTemplate restTemplate;
    private static final String POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";
    private static final String POKEAPI_SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";
    private static final String POKEAPI_POKEMON_COUNT_URL = "https://pokeapi.co/api/v2/pokemon?limit=1";

    public PokemonDataFetcherService() {
        this.restTemplate = new RestTemplate();
    }

    public int getTotalPokemonCount() {
        PokemonCountResponse response = restTemplate.getForObject(POKEAPI_POKEMON_COUNT_URL, PokemonCountResponse.class);
        return response != null ? response.getCount() : 0;
    }

    public Pokemon fetchPokemonData(int id) {
        String url = POKEAPI_URL + id;
        PokemonApiResponse response = restTemplate.getForObject(url, PokemonApiResponse.class);

        if (response != null) {
            List<Pokemon.Type> types = response.getTypes().stream()
                    .map(typeInfo -> new Pokemon.Type(typeInfo.getType().getName()))
                    .collect(Collectors.toList());

            List<Pokemon.Move> moves = response.getMoves().stream()
                    .map(moveInfo -> new Pokemon.Move(moveInfo.getMove().getName()))
                    .collect(Collectors.toList());

            // Fetch flavor text from species endpoint
            String speciesUrl = POKEAPI_SPECIES_URL + id;
            SpeciesApiResponse speciesResponse = restTemplate.getForObject(speciesUrl, SpeciesApiResponse.class);
            String flavorText = null;
            if (speciesResponse != null && speciesResponse.getFlavor_text_entries() != null) {
                for (SpeciesApiResponse.FlavorTextEntry entry : speciesResponse.getFlavor_text_entries()) {
                    if ("en".equals(entry.getLanguage().getName())) {
                        flavorText = entry.getFlavor_text();
                        break;
                    }
                }
            }

            return new Pokemon(
                    response.getId(),
                    response.getName(),
                    types,
                    response.getBaseExperience(),
                    moves,
                    flavorText,
                    null // Placeholder for evolutions, this would need additional API calls
            );
        }
        return null;
    }

    @Data
    private static class PokemonCountResponse {
        private int count;
    }

    @Data
    private static class PokemonApiResponse {
        private int id;
        private String name;
        private int baseExperience;
        private List<TypeInfo> types;
        private List<MoveInfo> moves;

        @Data
        private static class TypeInfo {
            private Type type;

            @Data
            private static class Type {
                private String name;
            }
        }

        @Data
        private static class MoveInfo {
            private Move move;

            @Data
            private static class Move {
                private String name;
            }
        }
    }

    @Data
    private static class SpeciesApiResponse {
        private List<FlavorTextEntry> flavor_text_entries;

        @Data
        private static class FlavorTextEntry {
            private String flavor_text;
            private Language language;

            @Data
            private static class Language {
                private String name;
            }

            @Data
            private static class Version {
                private String name;
            }
        }
    }
}
