package com.example.backend.config;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.context.annotation.Configuration;

@Configuration
public class UserInit {

   
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    void initializeTestUser() {
        if (userRepository.findByUsername("admin").isEmpty()) {
            User testUser = new User();
            testUser.setUsername("admin");
            testUser.setPassword("admin"); // Remember to encrypt the password if using in production
            userRepository.save(testUser);
        }
    }
}