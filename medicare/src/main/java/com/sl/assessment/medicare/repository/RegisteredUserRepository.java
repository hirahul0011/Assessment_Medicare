package com.sl.assessment.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.RegisteredUser;

public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Long> {

}
