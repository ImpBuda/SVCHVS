package com.example.lab12svchvs.service;

import com.example.lab12svchvs.model.Cards;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardService {

    List<Cards> findAll();

    void save(Cards cards);

    Optional<Cards> findById(Long aLong);

    void delete(Cards cards);
}
