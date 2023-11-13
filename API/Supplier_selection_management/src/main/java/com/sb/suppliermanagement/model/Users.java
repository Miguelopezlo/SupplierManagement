package com.sb.suppliermanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="USERS", schema="APP_M_PROV_SELECC")
public class Users {
    
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_secuence")
	@SequenceGenerator(name = "user_secuence", sequenceName = "user_secuence", allocationSize = 1)
	@Column(name="userid")
	Long userid;
	
	@Column(name="username")
    String username;
	
	@Column(name="userpassword")
    String userpassword;
}
