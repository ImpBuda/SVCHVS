package com.example.lab12svchvs.service.impl;

import com.example.lab12svchvs.model.Cards;
import com.example.lab12svchvs.repo.CardRepo;
import com.example.lab12svchvs.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CardServiceImpl implements CardService {

    private final CardRepo cardRepo;

    @Override
    public List<Cards> findAll() {
        return cardRepo.findAll();
    }

    @Override
    public void save(Cards cards) {
        cardRepo.save(cards);
    }

    @Override
    public Optional<Cards> findById(Long aLong) {
        return cardRepo.findById(aLong);
    }

    @Override
    public void delete(Cards cards) {
        cardRepo.delete(cards);
    }
}
