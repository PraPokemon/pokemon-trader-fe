package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userPokemon")

public class UserPokemon {
@Id
private int userPokemonId;
private int userId;
private int pokemonId;

public UserPokemon() {}

public UserPokemon(int userPokemonId, int userId, int pokemonId) {
    this.userPokemonId = userPokemonId;
	this.userId = userId;
    this.pokemonId = pokemonId;
}

public int getUserPokemonId() {
    return userPokemonId;
}

public void setUserPokemonId(int userPokemonId) {
    this.userPokemonId = userPokemonId;
}

public int getUserId() {
    return userId;
}

public void setUserId(int userId) {
    this.userId = userId;
}
   
public int getPokemonId() {
        return pokemonId;
    }

public void setPokemonId(int pokemonId) {
    this.pokemonId = pokemonId;
}

}



