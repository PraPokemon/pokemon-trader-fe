package com.example.backend.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
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
    private int level;
    private List<Pokemon.Type> types;
    private List<Pokemon.Move> moves;

    @DBRef
    private Items item; 
}