package com.sl.assessment.medicare.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sl.assessment.medicare.message.ResponseFile;
import com.sl.assessment.medicare.message.ResponseMessage;
import com.sl.assessment.medicare.model.Product;
import com.sl.assessment.medicare.repository.ProductRepository;
import com.sl.assessment.medicare.service.ProductFileStorageService;

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
	    return productRepository.findById(id).get();
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
	    s.setProduct_image_id(product.getProduct_image_id());
	    s.setProductcategoryid(product.getProductcategoryid());
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
	  
	  @GetMapping("/products/productsbycategory/{productcategoryid}")
	  public List<Product> findByProductcategoryid(@PathVariable("productcategoryid") long productcategoryid) {
		  return productRepository.findByProductcategoryidEquals(productcategoryid);	    
	  }	  

}
