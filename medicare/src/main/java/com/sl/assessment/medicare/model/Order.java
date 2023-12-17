package com.sl.assessment.medicare.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@Table(name="Order")
public class Order {
	
	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	GenerationType Identity is better than Auto as it generate the unique ID 
//	as per existing sequence
	private int order_id;
	private Date order_date;
	private int order_user_id;
	private int order_payment_id;
	private int order_product_id;
	
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public Date getOrder_date() {
		return order_date;
	}
	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}
	public int getOrder_user_id() {
		return order_user_id;
	}
	public void setOrder_user_id(int order_user_id) {
		this.order_user_id = order_user_id;
	}
	public int getOrder_payment_id() {
		return order_payment_id;
	}
	public void setOrder_payment_id(int order_payment_id) {
		this.order_payment_id = order_payment_id;
	}
	public int getOrder_product_id() {
		return order_product_id;
	}
	public void setOrder_product_id(int order_product_id) {
		this.order_product_id = order_product_id;
	}
	
	

}
