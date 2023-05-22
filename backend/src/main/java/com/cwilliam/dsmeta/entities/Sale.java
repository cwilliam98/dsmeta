package com.cwilliam.dsmeta.entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "tb_sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sellerName;

    private Integer visited;

    private Integer deals;

    private Double amount;

    private LocalDate date;
}
