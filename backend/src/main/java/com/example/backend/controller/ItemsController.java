package com.example.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.service.ItemsService;
import com.example.backend.model.Items;

import java.util.List;


@RestController
@RequestMapping("/items")
public class ItemsController {
	@Autowired
	private ItemsService itemsService;
	
	@GetMapping
	public List<Items> getAllItems(){
		return itemsService.getAllItems();
	}
}
