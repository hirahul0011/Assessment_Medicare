package com.sl.assessment.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
