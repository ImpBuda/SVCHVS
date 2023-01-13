package com.example.lab12svchvs.controller;

import com.example.lab12svchvs.exception.ResourceNotFoundException;
import com.example.lab12svchvs.model.Cards;
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
@RequestMapping("/api/cards")
@CrossOrigin(origins = "*")
public class CardController {

    private final CardService card;

    @GetMapping()
    public ResponseEntity<List<Cards>> get() {
        return ok(card.findAll());
    }

    @PostMapping()
    public ResponseEntity<Void> save(@Validated @RequestBody Cards cards) {
        card.save(cards);
        return ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Cards> update(@PathVariable long id, @RequestBody Cards cards) {
        Cards updatedCard = card.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id: " + id));

        updatedCard.setName(cards.getName());
        updatedCard.setPrice(cards.getPrice());
        updatedCard.setCount(cards.getCount());
        updatedCard.setImg(cards.getImg());

        card.save(updatedCard);

        return ResponseEntity.ok(updatedCard);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
        Cards cards = card.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id: " + id));
        card.delete(cards);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
