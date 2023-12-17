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

import com.sl.assessment.medicare.model.RegisteredUser;
import com.sl.assessment.medicare.repository.RegisteredUserRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class RegisteredUserController {
	
	@Autowired	
	  RegisteredUserRepository registeredUserRepository;
		
	  @GetMapping("/registeredUsers")
	  public List<RegisteredUser> getAllRegisteredUsers(@RequestParam(required = false) String title) {
		 return registeredUserRepository.findAll();	    
	  }

	  @GetMapping("/registeredUsers/{id}")
	  public RegisteredUser getRegisteredUserById(@PathVariable("id") long id) {
	    return registeredUserRepository.getById(id);
	  }

	  @PostMapping("/registeredUsers")
	  public void createRegisteredUser(@RequestBody RegisteredUser registeredUser) {
		   registeredUserRepository.save(registeredUser);
	    
	  }

	  @PutMapping("/registeredUsers/{id}")
	  public void updateRegisteredUser(@PathVariable("id") long id, @RequestBody RegisteredUser registeredUser) {
	    RegisteredUser s=getRegisteredUserById(id);
	    s.setRegistered_user_id(registeredUser.getRegistered_user_id());
	    s.setRegistered_user_name(registeredUser.getRegistered_user_name());
	    s.setRegistered_user_address(registeredUser.getRegistered_user_address());
	    s.setRegistered_user_location(registeredUser.getRegistered_user_location());
	    s.setRegistered_user_mail_id(registeredUser.getRegistered_user_mail_id());
	    s.setRegistered_user_password(registeredUser.getRegistered_user_password());
	    s.setRegistered_user_phone_number(registeredUser.getRegistered_user_phone_number());
	    registeredUserRepository.save(s);
	  }

	  @DeleteMapping("/registeredUsers/{id}")
	  public void deleteRegisteredUser(@PathVariable("id") long id) {
		  registeredUserRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/registeredUsers")
	  public void deleteAllRegisteredUsers() {
		  registeredUserRepository.deleteAll();
	    
	  }

}
