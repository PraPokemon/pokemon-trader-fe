package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.backend.model.Pokemon.Move;
import com.example.backend.model.Pokemon.Type;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Document(collection = "items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Items {
	@Id
	private int id;
	private String name;
}
