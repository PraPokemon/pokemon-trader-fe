package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;



@Document(collection = "items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Items {
	@Id
	private int id;
	private String name;
}
