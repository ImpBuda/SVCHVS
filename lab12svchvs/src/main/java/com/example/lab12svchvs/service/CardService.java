package com.example.lab12svchvs.service;

import com.example.lab12svchvs.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardService {

    List<Product> findAll();

    void save(Product cards);

    Optional<Product> findById(Long aLong);

    void delete(Product product);
}
