package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "userPokemons")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPokemon {
    @Id
    private int userPokemonId;
    private int userId;
    private int pokemonId;
}
