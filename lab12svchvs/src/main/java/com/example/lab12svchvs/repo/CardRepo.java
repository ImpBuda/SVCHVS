package com.example.lab12svchvs.repo;

import com.example.lab12svchvs.model.Cards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CardRepo extends JpaRepository<Cards,Integer> {
    Optional<Cards> findById(Long aLong);
}
