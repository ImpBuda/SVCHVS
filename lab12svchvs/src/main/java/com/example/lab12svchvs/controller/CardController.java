package com.example.lab12svchvs.controller;

import com.example.lab12svchvs.exception.ResourceNotFoundException;
import com.example.lab12svchvs.model.Product;
import com.example.lab12svchvs.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
public class CardController {

    private final CardService card;

    @GetMapping()
    public ResponseEntity<List<Product>> get() {
        return ok(card.findAll());
    }

    @PostMapping()
    public ResponseEntity<Void> save(@Validated @RequestBody Product product) {
        card.save(product);
        return ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> update(@PathVariable long id, @RequestBody Product product) {
        Product updatedCard = card.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id: " + id));

        updatedCard.setName(product.getName());
        updatedCard.setPrice(product.getPrice());
        updatedCard.setCount(product.getCount());
        updatedCard.setImg(product.getImg());

        card.save(updatedCard);

        return ResponseEntity.ok(updatedCard);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
        Product product = card.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id: " + id));
        card.delete(product);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
