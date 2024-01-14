package com.sl.assessment.medicare.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@Table(name="Order_Details") //Because Order is the key work in MySQL
public class Cart {
	
	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	GenerationType Identity is better than Auto as it generate the unique ID 
//	as per existing sequence
	private int cart_id;
	private int cart_product_id;
	private int cart_product_image_id;
	private String cart_product_name;
	private String cart_product_brand;
	private boolean cart_product_status;
	private double cart_product_price;
	private int cart_product_quantity;
	private double cart_product_subtotal;
	private String cartproductregisteredusername;
	
	public int getCart_id() {
		return cart_id;
	}
	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}
	public int getCart_product_id() {
		return cart_product_id;
	}
	public void setCart_product_id(int cart_product_id) {
		this.cart_product_id = cart_product_id;
	}
	public int getCart_product_image_id() {
		return cart_product_image_id;
	}
	public void setCart_product_image_id(int cart_product_image_id) {
		this.cart_product_image_id = cart_product_image_id;
	}
	public String getCart_product_name() {
		return cart_product_name;
	}
	public void setCart_product_name(String cart_product_name) {
		this.cart_product_name = cart_product_name;
	}
	public String getCart_product_brand() {
		return cart_product_brand;
	}
	public void setCart_product_brand(String cart_product_brand) {
		this.cart_product_brand = cart_product_brand;
	}
	public boolean isCart_product_status() {
		return cart_product_status;
	}
	public void setCart_product_status(boolean cart_product_status) {
		this.cart_product_status = cart_product_status;
	}
	public double getCart_product_price() {
		return cart_product_price;
	}
	public void setCart_product_price(double cart_product_price) {
		this.cart_product_price = cart_product_price;
	}
	public int getCart_product_quantity() {
		return cart_product_quantity;
	}
	public void setCart_product_quantity(int cart_product_quantity) {
		this.cart_product_quantity = cart_product_quantity;
	}
	public double getCart_product_subtotal() {
		return cart_product_subtotal;
	}
	public void setCart_product_subtotal(double cart_product_subtotal) {
		this.cart_product_subtotal = cart_product_subtotal;
	}
	public String getCartproductregisteredusername() {
		return cartproductregisteredusername;
	}
	public void setCartproductregisteredusername(String cartproductregisteredusername) {
		this.cartproductregisteredusername = cartproductregisteredusername;
	}
	
	
	
	
	
	
	
	
}
