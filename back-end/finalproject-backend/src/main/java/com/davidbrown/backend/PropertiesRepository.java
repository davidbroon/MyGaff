package com.davidbrown.backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertiesRepository extends MongoRepository<Properties,String> {

}
