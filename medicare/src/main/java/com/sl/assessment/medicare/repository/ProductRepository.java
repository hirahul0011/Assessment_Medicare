package com.sl.assessment.medicare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	List<Product> findByProductcategoryidEquals(long productcategoryid);

}
