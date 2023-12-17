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

import com.sl.assessment.medicare.model.Category;
import com.sl.assessment.medicare.repository.CategoryRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class CategoryController {
	
	@Autowired	
	  CategoryRepository categoryRepository;
		
	  @GetMapping("/categorys")
	  public List<Category> getAllCategorys(@RequestParam(required = false) String title) {
		 return categoryRepository.findAll();	    
	  }

	  @GetMapping("/categorys/{id}")
	  public Category getCategoryById(@PathVariable("id") long id) {
	    return categoryRepository.getById(id);
	  }

	  @PostMapping("/categorys")
	  public void createCategory(@RequestBody Category category) {
		   categoryRepository.save(category);
	    
	  }

	  @PutMapping("/categorys/{id}")
	  public void updateCategory(@PathVariable("id") long id, @RequestBody Category category) {
	    Category s=getCategoryById(id);
	    s.setCategory_id(category.getCategory_id());
	    s.setCategory_name(category.getCategory_name());	    	    
	    categoryRepository.save(s);
	  }

	  @DeleteMapping("/categorys/{id}")
	  public void deleteCategory(@PathVariable("id") long id) {
		  categoryRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/categorys")
	  public void deleteAllCategorys() {
		  categoryRepository.deleteAll();
	    
	  }

}
