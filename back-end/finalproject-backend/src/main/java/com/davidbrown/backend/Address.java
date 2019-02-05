package com.davidbrown.backend;

public class Address {
	private String City;
	private int Zip;
	private String State;
	private String Line1;
	
	protected Address() {}
	
	public Address(String City, int Zip, String State, String Line1) {
		this.City = City;
		this.Zip = Zip;
		this.State = State;
		this.Line1= Line1;
	}

	public String getCity() {
		return City;
	}

	public int getZip() {
		return Zip;
	}

	public String getState() {
		return State;
	}

	public String getLine1() {
		return Line1;
	}
	
}
