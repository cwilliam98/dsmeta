package com.cwilliam.dsmeta.services;

import com.cwilliam.dsmeta.entities.Sale;
import com.cwilliam.dsmeta.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SalesService {

    @Autowired
    private SalesRepository repository;

    public List<Sale> findSales(){
        return repository.findAll();
    }
}
