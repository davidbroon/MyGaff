package com.davidbrown.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/properties")
public class PropertiesController {
	private PropertiesRepository propertiesRepository;
	
	public PropertiesController(PropertiesRepository propertiesRepository) {
		this.propertiesRepository = propertiesRepository;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/all")
	public List<Properties> getAll(){
		List<Properties> properties = this.propertiesRepository.findAll();
		
		return properties;
	}

}
