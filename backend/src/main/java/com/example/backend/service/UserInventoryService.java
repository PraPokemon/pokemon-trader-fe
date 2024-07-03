package com.example.backend.service;

import com.example.backend.model.UserInventory;
import com.example.backend.repository.UserInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserInventoryService {

    @Autowired
    private UserInventoryRepository userInventoryRepository;

    public List<UserInventory> findAll() {
        return userInventoryRepository.findAll();
    }

    public Optional<UserInventory> findById(int id) {
        return userInventoryRepository.findById(id);
    }

    public UserInventory save(UserInventory userInventory) {
        return userInventoryRepository.save(userInventory);
    }

    public void deleteById(int id) {
        userInventoryRepository.deleteById(id);
    }

    public UserInventory update(UserInventory userInventory) {
        return userInventoryRepository.save(userInventory);
    }
}
