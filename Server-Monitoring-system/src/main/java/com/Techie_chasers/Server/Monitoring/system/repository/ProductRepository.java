package com.Techie_chasers.Server.Monitoring.system.repository;

import com.Techie_chasers.Server.Monitoring.system.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findAllByCreatedAt(LocalDate localDate);
}
