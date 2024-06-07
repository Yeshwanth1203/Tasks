package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class ApplicationForm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    private String address;
    private String pincode;
    private String mobileNo;
    @Lob
    private byte[] pdf;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public byte[] getPdf() {
		return pdf;
	}

	public void setPdf(byte[] pdf) {
		this.pdf = pdf;
	}

	public ApplicationForm(Long id, String address, String pincode, String mobileNo, byte[] pdf) {
		super();
		this.id = id;
		this.address = address;
		this.pincode = pincode;
		this.mobileNo = mobileNo;
		this.pdf = pdf;
	}

	public ApplicationForm() {
		super();
		// TODO Auto-generated constructor stub
	}
	
    
    
}
