package com.example.backend.controller;

import com.example.backend.model.UserInventory;
import com.example.backend.service.UserInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userInventories")
public class UserInventoryController {

    @Autowired
    private UserInventoryService userInventoryService;

    @GetMapping
    public List<UserInventory> getAllUserInventories() {
        return userInventoryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserInventory> getUserInventoryById(@PathVariable int id) {
        return userInventoryService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public UserInventory createUserInventory(@RequestBody UserInventory userInventory) {
        return userInventoryService.save(userInventory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserInventory> updateUserInventory(@PathVariable int id, @RequestBody UserInventory userInventory) {
        return userInventoryService.findById(id)
                .map(existingUserInventory -> {
                    userInventory.setId(existingUserInventory.getId());
                    return ResponseEntity.ok(userInventoryService.save(userInventory));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserInventory(@PathVariable int id) {
        return userInventoryService.findById(id)
                .<ResponseEntity<Void>>map(existingUserInventory -> {
                    userInventoryService.deleteById(id);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
