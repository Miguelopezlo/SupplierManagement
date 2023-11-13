package com.sb.suppliermanagement.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;

@Configuration
public class JacksonConfig {
	
	@Bean
	public Hibernate5Module hibernate5Module() {
	    return new Hibernate5Module();
	}

}
