package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Document(collection = "pokemon")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pokemon {
    @Id
    private int id;
    private String name;
    private List<Type> types;
    private List<Move> moves;
    private String flavorText;
    private List<String> evolutions;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Type {
        private String name;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Move {
        private String name;
    }
}
