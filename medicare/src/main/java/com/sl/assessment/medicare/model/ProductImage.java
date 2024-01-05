package com.sl.assessment.medicare.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
//@Table(name="Product")
public class ProductImage {
	
	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	GenerationType Identity is better than Auto as it generate the unique ID 
//	as per existing sequence
	private int product_image_id;	
	@Lob
	private byte[] product_product_image;
	
	private String product_product_image_name;
	private String product_product_image_type;	
	
	public ProductImage(String product_product_image_name, 
			String product_product_image_type,
			byte[] product_product_image) {
		super();
		this.product_product_image = product_product_image;
		this.product_product_image_name = product_product_image_name;
		this.product_product_image_type = product_product_image_type;
	}	
	
	public ProductImage() {
		super();
		// TODO Auto-generated constructor stub
	}	

	public int getProduct_image_id() {
		return product_image_id;
	}

	public void setProduct_image_id(int product_image_id) {
		this.product_image_id = product_image_id;
	}

	public byte[] getProduct_product_image() {
		return product_product_image;
	}
	public void setProduct_product_image(byte[] product_product_image) {
		this.product_product_image = product_product_image;
	}	
	
	public String getProduct_product_image_name() {
		return product_product_image_name;
	}
	public void setProduct_product_image_name(String product_product_image_name) {
		this.product_product_image_name = product_product_image_name;
	}
	public String getProduct_product_image_type() {
		return product_product_image_type;
	}
	public void setProduct_product_image_type(String product_product_image_type) {
		this.product_product_image_type = product_product_image_type;
	}		

}
