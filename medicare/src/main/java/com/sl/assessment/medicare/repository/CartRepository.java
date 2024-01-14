package com.sl.assessment.medicare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Cart;
import com.sl.assessment.medicare.model.Product;

public interface CartRepository extends JpaRepository<Cart, Long> {
	
	List<Cart> findByCartproductregisteredusernameEquals(String cartproductregisteredusername);

}
