package com.example.lab12svchvs.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "CARDS")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@Getter
@Setter
public class Cards {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String name;

    @Column
    private Double price;

    @Column(name = "img")
    private String img;

    @Column
    private Integer count;
}
