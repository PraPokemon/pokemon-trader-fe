package com.example.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.service.ItemsService;
import com.example.backend.model.Items;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/items")
public class ItemsController {
	@Autowired
	private ItemsService itemsService;
	
	@GetMapping
	public List<Items> getAllItems(){
		return itemsService.getAllItems();
	}
	@GetMapping("/{id}")
	public Optional<Items> getItemById(int id){
		return itemsService.findById(id);
	}
}
