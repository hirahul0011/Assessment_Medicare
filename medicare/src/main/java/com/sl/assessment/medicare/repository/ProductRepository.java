package com.sl.assessment.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
