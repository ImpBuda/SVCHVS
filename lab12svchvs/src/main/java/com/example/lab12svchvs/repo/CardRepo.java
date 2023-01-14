package com.example.lab12svchvs.repo;

import com.example.lab12svchvs.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CardRepo extends JpaRepository<Product,Integer> {
    Optional<Product> findById(Long aLong);
}
