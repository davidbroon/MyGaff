package com.davidbrown.backend;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Properties")
public class Properties {
	@Id
	private String id;
	private String HomeName;
	private Address Address;
	private Date DatePosted;
	@Indexed(direction = IndexDirection.ASCENDING)
	private String Price;
	
	public Properties(String HomeName, Address Address, Date DatePosted, String Price) {
		this.HomeName = HomeName;
		this.Address = Address;
		this.DatePosted = DatePosted;
		this.Price = Price;
	}
	

	public String getId() {
		return id;
	}

	public String getHomeName() {
		return HomeName;
	}

	public Address getAddress() {
		return Address;
	}

	public Date getDatePosted() {
		return DatePosted;
	}

	public String getPrice() {
		return Price;
	}
	
}

