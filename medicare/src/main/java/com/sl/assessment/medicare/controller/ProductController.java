package com.sl.assessment.medicare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sl.assessment.medicare.model.Product;
import com.sl.assessment.medicare.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class ProductController {
	
	@Autowired	
	  ProductRepository productRepository;
		
	  @GetMapping("/products")
	  public List<Product> getAllProducts(@RequestParam(required = false) String title) {
		 return productRepository.findAll();	    
	  }

	  @GetMapping("/products/{id}")
	  public Product getProductById(@PathVariable("id") long id) {
	    return productRepository.getById(id);
	  }

	  @PostMapping("/products")
	  public void createProduct(@RequestBody Product product) {
		   productRepository.save(product);
	    
	  }

	  @PutMapping("/products/{id}")
	  public void updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
	    Product s=getProductById(id);
	    s.setProduct_id(product.getProduct_id());
	    s.setProduct_name(product.getProduct_name());
	    s.setProduct_brand(product.getProduct_brand());
	    s.setProduct_price(product.getProduct_price());
	    s.setProduct_quantity(product.getProduct_quantity());
	    s.setProduct_product_image(product.getProduct_product_image());
	    s.setProduct_category_id(product.getProduct_category_id());
	    s.setProduct_status(product.isProduct_status());
	    productRepository.save(s);
	  }

	  @DeleteMapping("/products/{id}")
	  public void deleteProduct(@PathVariable("id") long id) {
		  productRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/products")
	  public void deleteAllProducts() {
		  productRepository.deleteAll();
	    
	  }

}
