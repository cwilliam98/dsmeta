package com.cwilliam.dsmeta.repositories;

import com.cwilliam.dsmeta.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepository extends JpaRepository<Sale, Long> {
}
