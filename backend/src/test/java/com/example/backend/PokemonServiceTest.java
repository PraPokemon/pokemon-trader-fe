package com.example.backend;

import com.example.backend.model.Pokemon;
import com.example.backend.repository.PokemonRepository;
import com.example.backend.service.PokemonService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.core.annotation.MergedAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


public class PokemonServiceTest {

    @InjectMocks
    private PokemonService pokemonService;

    @Mock
    private PokemonRepository pokemonRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetFilteredPokemons() {
        // Mock data
        Pokemon p1 = new Pokemon();
        p1.setId(1);
        p1.setName("bulbasaur");
       

        Pokemon p2 = new Pokemon();
        p2.setId(2);
        p2.setName("ivysaur");
        

        List<Pokemon> allPokemons = Arrays.asList(p1, p2);

        // Mock repository
        when(pokemonRepository.findAll()).thenReturn(allPokemons);

        // Call the service
        Page<Pokemon> result = pokemonService.getFilteredPokemons(0, 10, "bulbasaur");

        // Assert the results
        assertEquals(1, result.getTotalElements());
        assertEquals("bulbasaur", result.getContent().get(0).getName());
    }
}