package com.cwilliam.dsmeta.controllers;

import com.cwilliam.dsmeta.entities.Sale;
import com.cwilliam.dsmeta.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {

    @Autowired
    private SalesService service;
    @GetMapping
    public Page<Sale> findSales(@RequestParam(value = "minDate", defaultValue = "") String minDate,
                                @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
                                Pageable pageable){
        return  service.findSales(minDate, maxDate, pageable);
    }
}
