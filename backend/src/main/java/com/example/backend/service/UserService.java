package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Slf4j
@Service
public class UserService {
	
	

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private SequenceService sequenceService;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User createUser(User user) {
    	if (user.getUserId() == 0) {
            user.setUserId(sequenceService.getNextSequence("users_sequence"));
        }
        return userRepository.save(user);
    }

    public User updateUser(int id, User userDetails) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
    public Optional<User> login(String username, String password) {
        log.info("Attempting login for username: {}", username);
        Optional<User> foundUser = userRepository.findByUsername(username);
        if (foundUser.isPresent()) {
            log.info("User found: {}", foundUser.get().getUsername());
            if (foundUser.get().getPassword().equals(password)) {
                log.info("Password match for user: {}", username);
                return foundUser;
            } else {
                log.info("Password mismatch for user: {}", username);
            }
        } else {
            log.info("User not found: {}", username);
        }
        return Optional.empty();
    }
}
