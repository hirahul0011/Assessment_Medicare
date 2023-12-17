package com.sl.assessment.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
