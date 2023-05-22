package com.cwilliam.dsmeta.controllers;

import com.cwilliam.dsmeta.entities.Sale;
import com.cwilliam.dsmeta.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {

    @Autowired
    private SalesService service;
    @GetMapping
    public List<Sale> findSales(){
        return  service.findSales();
    }
}
