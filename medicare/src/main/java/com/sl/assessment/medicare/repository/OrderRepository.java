package com.sl.assessment.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.medicare.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
