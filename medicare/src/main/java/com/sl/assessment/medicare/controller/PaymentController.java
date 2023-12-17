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

import com.sl.assessment.medicare.model.Payment;
import com.sl.assessment.medicare.repository.PaymentRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class PaymentController {
	
	@Autowired	
	  PaymentRepository paymentRepository;
		
	  @GetMapping("/payments")
	  public List<Payment> getAllPayments(@RequestParam(required = false) String title) {
		 return paymentRepository.findAll();	    
	  }

	  @GetMapping("/payments/{id}")
	  public Payment getPaymentById(@PathVariable("id") long id) {
	    return paymentRepository.getById(id);
	  }

	  @PostMapping("/payments")
	  public void createPayment(@RequestBody Payment payment) {
		   paymentRepository.save(payment);
	    
	  }

	  @PutMapping("/payments/{id}")
	  public void updatePayment(@PathVariable("id") long id, @RequestBody Payment payment) {
	    Payment s=getPaymentById(id);
	    s.setPayment_id(payment.getPayment_id());
	    s.setPayment_amount(payment.getPayment_amount());
	    s.setPayment_user_id(payment.getPayment_user_id());
	    s.setPayment_date(payment.getPayment_date());
	    paymentRepository.save(s);
	  }

	  @DeleteMapping("/payments/{id}")
	  public void deletePayment(@PathVariable("id") long id) {
		  paymentRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/payments")
	  public void deleteAllPayments() {
		  paymentRepository.deleteAll();
	    
	  }

}
