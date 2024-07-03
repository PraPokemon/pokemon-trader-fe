package com.example.backend.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.example.backend.model.Items;
import com.example.backend.repository.ItemsRepository;

import jakarta.annotation.PostConstruct;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ItemFetcherService {

    private static final String POKEAPI_URL = "https://pokeapi.co/api/v2/item/";
    private static final String HELD_ITEMS_CATEGORY = "held-items";

    @Autowired
    private ItemsRepository itemRepository;

    @PostConstruct
    public void init() {
        try {
            log.info("Checking if items already exist in the database.");
            if (itemRepository.count() == 0) {
                log.info("Items not found in the database. Fetching items from PokeAPI.");
                fetchAndSaveAllItems();
            } else {
                log.info("Items already exist in the database. Fetching skipped.");
            }
        } catch (Exception e) {
            log.error("Error occurred during initialization: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to initialize ItemFetcherService", e);
        }
    }

    public void fetchAndSaveAllItems() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String nextUrl = POKEAPI_URL;

            List<Items> items = new ArrayList<>();
            while (nextUrl != null) {
                PokeApiResponse response = restTemplate.getForObject(nextUrl, PokeApiResponse.class);
                if (response != null && response.getResults() != null) {
                    log.info("PokeAPI Response: {}", response);
                    for (ApiItem apiItem : response.getResults()) {
                        log.info("Processing initial item: {}", apiItem);
                        if (apiItem.getUrl() != null) {
                            ApiItem detailedItem = fetchItemDetails(apiItem.getUrl());
                            if (detailedItem != null) {
                                log.info("Detailed item fetched: {}", detailedItem);
                                if (isHeldItem(detailedItem)) {
                                    Items item = new Items();
                                    item.setId(detailedItem.getId());
                                    item.setName(detailedItem.getName());
                                    items.add(item);
                                    log.info("Adding held item to list: {}", item);
                                }
                            }
                        } else {
                            log.warn("Initial item URL is null: {}", apiItem);
                        }
                    }
                    nextUrl = response.getNext();
                } else {
                    nextUrl = null;
                }
            }

            itemRepository.saveAll(items);
            log.info("Held items fetched and saved to the database. Total items: {}", items.size());

        } catch (Exception e) {
            log.error("Error occurred while fetching or saving items: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to fetch and save items", e);
        }
    }

    private ApiItem fetchItemDetails(String itemUrl) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            log.info("Fetching detailed item from URL: {}", itemUrl);
            return restTemplate.getForObject(itemUrl, ApiItem.class);
        } catch (HttpClientErrorException e) {
            log.error("Error occurred while fetching item details from URL {}: {}", itemUrl, e.getMessage());
            return null;
        } catch (Exception e) {
            log.error("General error occurred while fetching item details from URL {}: {}", itemUrl, e.getMessage());
            return null;
        }
    }

    private boolean isHeldItem(ApiItem apiItem) {
        return apiItem.getCategory() != null && HELD_ITEMS_CATEGORY.equals(apiItem.getCategory().getName());
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ApiItem {
        private int id;
        private String name;
        private NamedAPIResource category;
        private String url; // URL to fetch detailed info
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class NamedAPIResource {
        private String name;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PokeApiResponse {
        private List<ApiItem> results;
        private String next; // URL for the next page of results
    }
}