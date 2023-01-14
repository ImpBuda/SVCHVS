package com.example.lab12svchvs.service.impl;

import com.example.lab12svchvs.model.Product;
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
    public List<Product> findAll() {
        return cardRepo.findAll();
    }

    @Override
    public void save(Product product) {
        cardRepo.save(product);
    }

    @Override
    public Optional<Product> findById(Long aLong) {
        return cardRepo.findById(aLong);
    }

    @Override
    public void delete(Product product) {
        cardRepo.delete(product);
    }
}
