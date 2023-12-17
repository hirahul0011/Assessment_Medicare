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

import com.sl.assessment.medicare.model.Admin;
import com.sl.assessment.medicare.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class AdminController {
	
	@Autowired	
	  AdminRepository adminRepository;
		
	  @GetMapping("/admins")
	  public List<Admin> getAllAdmins(@RequestParam(required = false) String title) {
		 return adminRepository.findAll();	    
	  }

	  @GetMapping("/admins/{id}")
	  public Admin getAdminById(@PathVariable("id") long id) {
	    return adminRepository.getById(id);
	  }

	  @PostMapping("/admins")
	  public void createAdmin(@RequestBody Admin admin) {
		   adminRepository.save(admin);
	    
	  }

	  @PutMapping("/admins/{id}")
	  public void updateAdmin(@PathVariable("id") long id, @RequestBody Admin admin) {
	    Admin s=getAdminById(id);
	    s.setAdmin_id(admin.getAdmin_id());
	    s.setAdmin_user_name(admin.getAdmin_user_name());
	    s.setAdmin_password(admin.getAdmin_password());
	    adminRepository.save(s);
	  }

	  @DeleteMapping("/admins/{id}")
	  public void deleteAdmin(@PathVariable("id") long id) {
		  adminRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/admins")
	  public void deleteAllAdmins() {
		  adminRepository.deleteAll();
	    
	  }

}
