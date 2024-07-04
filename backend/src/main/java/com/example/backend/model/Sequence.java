package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "sequences")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sequence {
    @Id
    private String userId;
    private int seq;
}
