package com.sl.assessment.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
