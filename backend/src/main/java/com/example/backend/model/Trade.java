package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "trade")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trade {
    @Id
    private int tradeId;
    private int initiatingUserId;
    private int receivingUserId;
    private TradeStatus status;  
}
