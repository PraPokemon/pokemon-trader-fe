package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Items;
import com.example.backend.repository.ItemsRepository;

@Service
public class ItemsService {
	@Autowired
	private ItemsRepository itemsRepository;
	
	public List<Items> getAllItems(){
		return itemsRepository.findAll();
	
	}
	public Optional<Items> findById(int id) {
        return itemsRepository.findById(id);
    }
}
