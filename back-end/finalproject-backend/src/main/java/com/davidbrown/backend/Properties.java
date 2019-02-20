package com.davidbrown.backend;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "fruits")
public class Properties {
	@Id
	private String id; 
	@JsonProperty  
	private String image;
	private String HomeName;
	private Address Address;
	private Date DatePosted;
	@Indexed(direction = IndexDirection.ASCENDING)
	private String Price;
	private String Link;
	
	public Properties(String HomeName, Address Address, Date DatePosted, String Price, String image, String Link) {
		this.HomeName = HomeName;
		this.Address = Address;
		this.DatePosted = DatePosted;
		this.Price = Price;
		this.image = image;
		this.Link = Link;
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
	
	public String getImage() {
		return image;
	}
	
	public String getLink() {
		return Link;
	}
	
}

