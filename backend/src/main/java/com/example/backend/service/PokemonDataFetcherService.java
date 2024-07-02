package com.example.backend.service;

import com.example.backend.model.Pokemon;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PokemonDataFetcherService {

    private final RestTemplate restTemplate;
    private static final String POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";
    private static final String POKEAPI_SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";
    private static final String POKEAPI_POKEMON_COUNT_URL = "https://pokeapi.co/api/v2/pokemon?limit=1";
    private static final String POKEAPI_EVOLUTION_CHAIN_URL = "https://pokeapi.co/api/v2/evolution-chain/";

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
            List<Pokemon.Type> types = response.getTypes()
                    .stream()
                    .map(typeInfo -> new Pokemon.Type(typeInfo.getType().getName()))
                    .collect(Collectors.toList());

            List<Pokemon.Move> moves = response.getMoves()
                    .stream()
                    .map(moveInfo -> new Pokemon.Move(moveInfo.getMove().getName()))
                    .collect(Collectors.toList());

            // Fetch flavor text from species endpoint
            String speciesUrl = POKEAPI_SPECIES_URL + id;
            SpeciesApiResponse speciesResponse = restTemplate.getForObject(speciesUrl, SpeciesApiResponse.class);
            String flavorText = "";
            if (speciesResponse != null && speciesResponse.getFlavor_text_entries() != null) {
                flavorText = speciesResponse.getFlavor_text_entries()
                        .stream()
                        .filter(entry -> "en".equals(entry.getLanguage().getName()))
                        .findFirst()
                        .map(SpeciesApiResponse.FlavorTextEntry::getFlavor_text)
                        .orElse("");
            }

            // Fetch evolution chain
            List<String> evolutions = new ArrayList<>();
            if (speciesResponse != null && speciesResponse.getEvolution_chain() != null) {
                String evolutionChainUrl = speciesResponse.getEvolution_chain().getUrl();
                EvolutionChainResponse evolutionChainResponse = restTemplate.getForObject(evolutionChainUrl, EvolutionChainResponse.class);
                if (evolutionChainResponse != null && evolutionChainResponse.getChain() != null) {
                    addEvolutions(evolutionChainResponse.getChain(), evolutions);
                }
            }

            Pokemon pokemon = new Pokemon();
            pokemon.setId(response.getId());
            pokemon.setName(response.getName());
            pokemon.setTypes(types);
            pokemon.setMoves(moves);
            pokemon.setFlavorText(flavorText);
            pokemon.setEvolutions(evolutions);

            return pokemon;
        }
        return null;
    }

    private void addEvolutions(EvolutionChainResponse.EvolutionChainNode node, List<String> evolutions) {
        if (node == null) {
            return;
        }
        evolutions.add(node.getSpecies().getName());
        for (EvolutionChainResponse.EvolutionChainNode nextNode : node.getEvolves_to()) {
            addEvolutions(nextNode, evolutions);
        }
    }

    @Data
    private static class PokemonCountResponse {
        private int count;
    }

    @Data
    private static class PokemonApiResponse {
        private int id;
        private String name;
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
        private EvolutionChain evolution_chain;

        @Data
        private static class FlavorTextEntry {
            private String flavor_text;
            private Language language;

            @Data
            private static class Language {
                private String name;
            }
        }

        @Data
        private static class EvolutionChain {
            private String url;
        }
    }

    @Data
    private static class EvolutionChainResponse {
        private EvolutionChainNode chain;

        @Data
        private static class EvolutionChainNode {
            private Species species;
            private List<EvolutionChainNode> evolves_to;

            @Data
            private static class Species {
                private String name;
            }
        }
    }
}
