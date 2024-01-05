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
public class Product {
	
	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	GenerationType Identity is better than Auto as it generate the unique ID 
//	as per existing sequence
	private int product_id;
	private String product_name;
	private String product_brand;
	private Double product_price;
	private int product_quantity;
	@Lob
	private int product_image_id;
	
//	private String product_product_image_name;
//	private String product_product_image_type;
	
//	@Column(name="product_category_id")
	private int productcategoryid;
	private boolean product_status;	
	
	
	
//		public Product(int product_id, String product_name, String product_brand, Double product_price,
//			int product_quantity, byte[] product_product_image, String product_product_image_name,
//			String product_product_image_type, int productcategoryid, boolean product_status) {
//		super();
//		this.product_id = product_id;
//		this.product_name = product_name;
//		this.product_brand = product_brand;
//		this.product_price = product_price;
//		this.product_quantity = product_quantity;
//		this.product_product_image = product_product_image;
//		this.product_product_image_name = product_product_image_name;
//		this.product_product_image_type = product_product_image_type;
//		this.productcategoryid = productcategoryid;
//		this.product_status = product_status;
//	}
	
	
//	public Product(String product_product_image_name, 
//			String product_product_image_type,
//			byte[] product_product_image) {
//		super();
//		this.product_product_image = product_product_image;
//		this.product_product_image_name = product_product_image_name;
//		this.product_product_image_type = product_product_image_type;
//	}	
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_brand() {
		return product_brand;
	}
	public void setProduct_brand(String product_brand) {
		this.product_brand = product_brand;
	}
	public Double getProduct_price() {
		return product_price;
	}
	public void setProduct_price(Double product_price) {
		this.product_price = product_price;
	}
	public int getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}	
	
	public int getProduct_image_id() {
		return product_image_id;
	}

	public void setProduct_image_id(int product_image_id) {
		this.product_image_id = product_image_id;
	}

	public int getProductcategoryid() {
		return productcategoryid;
	}
	public void setProductcategoryid(int productcategoryid) {
		this.productcategoryid = productcategoryid;
	}
	public boolean isProduct_status() {
		return product_status;
	}
	public void setProduct_status(boolean product_status) {
		this.product_status = product_status;
	}
	
	

}
