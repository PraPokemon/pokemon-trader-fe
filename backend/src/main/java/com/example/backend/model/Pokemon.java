package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "pokemons")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pokemon {
    @Id
    private int pokemonId;
    private String name;
    private String type;
    private int level;
    private String move;
    private String flavorText;
    private String evolutions;
}
