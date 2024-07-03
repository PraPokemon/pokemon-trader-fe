package com.example.backend.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "userInventories")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInventory {

    @Id
    private int id;
    private int userId;  
    private List<UserPokemon> pokemons; 
}
