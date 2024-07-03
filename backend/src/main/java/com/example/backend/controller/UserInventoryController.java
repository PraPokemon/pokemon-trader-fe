package com.example.backend.controller;

import com.example.backend.model.UserInventory;
import com.example.backend.model.UserPokemon;
import com.example.backend.service.UserInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        Optional<UserInventory> userInventory = userInventoryService.findById(id);
        return userInventory.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public UserInventory createUserInventory(@RequestBody UserInventory userInventory) {
        return userInventoryService.save(userInventory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserInventory> updateUserInventory(@PathVariable int id, @RequestBody UserInventory userInventoryDetails) {
        Optional<UserInventory> optionalUserInventory = userInventoryService.findById(id);

        if (optionalUserInventory.isPresent()) {
            UserInventory userInventory = optionalUserInventory.get();
            userInventory.setUserId(userInventoryDetails.getUserId());
            userInventory.setPokemons(userInventoryDetails.getPokemons());
            return ResponseEntity.ok(userInventoryService.save(userInventory));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserInventory(@PathVariable int id) {
        Optional<UserInventory> userInventory = userInventoryService.findById(id);
        if (userInventory.isPresent()) {
            userInventoryService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{userId}/addPokemon")
    public ResponseEntity<UserInventory> addPokemonToUserInventory(@PathVariable int userId, @RequestBody UserPokemon userPokemon) {
        UserInventory userInventory = userInventoryService.addPokemonToInventory(userId, userPokemon);
        return ResponseEntity.ok(userInventory);
    }
}
