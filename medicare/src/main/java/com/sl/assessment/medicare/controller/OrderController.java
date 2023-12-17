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

import com.sl.assessment.medicare.model.Order;
import com.sl.assessment.medicare.repository.OrderRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class OrderController {
	
	@Autowired	
	  OrderRepository orderRepository;
		
	  @GetMapping("/orders")
	  public List<Order> getAllOrders(@RequestParam(required = false) String title) {
		 return orderRepository.findAll();	    
	  }

	  @GetMapping("/orders/{id}")
	  public Order getOrderById(@PathVariable("id") long id) {
	    return orderRepository.getById(id);
	  }

	  @PostMapping("/orders")
	  public void createOrder(@RequestBody Order order) {
		   orderRepository.save(order);
	    
	  }

	  @PutMapping("/orders/{id}")
	  public void updateOrder(@PathVariable("id") long id, @RequestBody Order order) {
	    Order s=getOrderById(id);
	    s.setOrder_id(order.getOrder_id());
	    s.setOrder_date(order.getOrder_date());
	    s.setOrder_user_id(order.getOrder_user_id());
	    s.setOrder_payment_id(order.getOrder_payment_id());
	    s.setOrder_product_id(order.getOrder_product_id());
	    orderRepository.save(s);
	  }

	  @DeleteMapping("/orders/{id}")
	  public void deleteOrder(@PathVariable("id") long id) {
		  orderRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/orders")
	  public void deleteAllOrders() {
		  orderRepository.deleteAll();
	    
	  }

}
