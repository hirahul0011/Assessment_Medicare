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

import com.sl.assessment.medicare.model.Cart;
import com.sl.assessment.medicare.model.Product;
import com.sl.assessment.medicare.repository.CartRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class CartController {
	
	@Autowired	
	  CartRepository cartRepository;
		
	  @GetMapping("/carts")
	  public List<Cart> getAllCarts(@RequestParam(required = false) String title) {
		 return cartRepository.findAll();	    
	  }

	  @GetMapping("/carts/{id}")
	  public Cart getCartById(@PathVariable("id") long id) {
	    return cartRepository.findById(id).get();
	  }

	  @PostMapping("/carts")
	  public void createCart(@RequestBody Cart cart) {
		   cartRepository.save(cart);
	    
	  }

	  @PutMapping("/carts/{id}")
	  public void updateCart(@PathVariable("id") long id, @RequestBody Cart cart) {
	    Cart s=getCartById(id);
	    s.setCart_id(cart.getCart_id());
	    s.setCart_product_id(cart.getCart_product_id());
	    s.setCart_product_image_id(cart.getCart_product_image_id());
	    s.setCart_product_name(cart.getCart_product_name());
	    s.setCart_product_brand(cart.getCart_product_brand());
	    s.setCart_product_status(cart.isCart_product_status());
	    s.setCart_product_price(cart.getCart_product_price());
	    s.setCart_product_quantity(cart.getCart_product_quantity());
	    s.setCart_product_subtotal(cart.getCart_product_subtotal());
	    s.setCartproductregisteredusername(cart.getCartproductregisteredusername());
	    cartRepository.save(s);
	  }

	  @DeleteMapping("/carts/{id}")
	  public void deleteCart(@PathVariable("id") long id) {
		  cartRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/carts")
	  public void deleteAllCarts() {
		  cartRepository.deleteAll();
	    
	  }
	  
	  @GetMapping("/carts/cartsbyregisteredusers/{cartproductregisteredusername}")
	  public List<Cart> findByCartproductregisteredusername(@PathVariable("cartproductregisteredusername") String cartproductregisteredusername) {
		  return cartRepository.findByCartproductregisteredusernameEquals(cartproductregisteredusername);	    
	  }	

}
