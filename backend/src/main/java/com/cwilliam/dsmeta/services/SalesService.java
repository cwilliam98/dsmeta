package com.cwilliam.dsmeta.services;

import com.cwilliam.dsmeta.entities.Sale;
import com.cwilliam.dsmeta.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
@Service
public class SalesService {

    @Autowired
    private SalesRepository repository;

    public Page<Sale> findSales(String minDate, String maxData, Pageable pageable) {

        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());


        LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = maxData.equals("") ? today : LocalDate.parse(maxData);

        return repository.findSales(min, max, pageable);
    }
}
