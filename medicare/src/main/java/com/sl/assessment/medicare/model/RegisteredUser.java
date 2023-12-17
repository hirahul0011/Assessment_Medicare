package com.sl.assessment.medicare.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Registered_User")
public class RegisteredUser {
	
	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	GenerationType Identity is better than Auto as it generate the unique ID 
//	as per existing sequence
	private int registered_user_id;
	private String registered_user_name;
	private String registered_user_address;
	private String registered_user_location;
	private String registered_user_mail_id;
	private String registered_user_password;
	private String registered_user_phone_number;
	
	public int getRegistered_user_id() {
		return registered_user_id;
	}
	public void setRegistered_user_id(int registered_user_id) {
		this.registered_user_id = registered_user_id;
	}
	public String getRegistered_user_name() {
		return registered_user_name;
	}
	public void setRegistered_user_name(String registered_user_name) {
		this.registered_user_name = registered_user_name;
	}
	public String getRegistered_user_address() {
		return registered_user_address;
	}
	public void setRegistered_user_address(String registered_user_address) {
		this.registered_user_address = registered_user_address;
	}
	public String getRegistered_user_location() {
		return registered_user_location;
	}
	public void setRegistered_user_location(String registered_user_location) {
		this.registered_user_location = registered_user_location;
	}
	public String getRegistered_user_mail_id() {
		return registered_user_mail_id;
	}
	public void setRegistered_user_mail_id(String registered_user_mail_id) {
		this.registered_user_mail_id = registered_user_mail_id;
	}
	public String getRegistered_user_password() {
		return registered_user_password;
	}
	public void setRegistered_user_password(String registered_user_password) {
		this.registered_user_password = registered_user_password;
	}
	public String getRegistered_user_phone_number() {
		return registered_user_phone_number;
	}
	public void setRegistered_user_phone_number(String registered_user_phone_number) {
		this.registered_user_phone_number = registered_user_phone_number;
	}
	
	

}
