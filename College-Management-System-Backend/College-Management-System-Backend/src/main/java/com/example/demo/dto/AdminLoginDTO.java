package com.example.demo.dto;

public class AdminLoginDTO {

	private String email;
	private String password;
	
	public AdminLoginDTO() {
		super();
	}

	public AdminLoginDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "AdminLoginDTO [email=" + email + ", password=" + password + "]";
	}
	
	
	
}
