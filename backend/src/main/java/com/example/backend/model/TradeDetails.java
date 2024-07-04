package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "tradeDetails")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TradeDetails {
    @Id
    private int tradeDetailId;
    private int tradeId;
    private int userPokemonId;
    private int targetPokemonId;
    private TradeDirection direction;  
    private int minLevel;
}
