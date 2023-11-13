package com.sb.suppliermanagement.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="selectioncriteria", schema="APP_M_PROV_SELECC")
public class SelectionCriteria {
	
	@Id
	@JsonIgnore
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "selectioncriteria_secuence")
	@SequenceGenerator(name = "selectioncriteria_secuence", sequenceName = "selectioncriteria_secuence", allocationSize = 1)
	@Column(name="selectioncriteriaid")
	Long selectioncriteriaid;
	
	@Column(name="selectioncriterianame")
	String selectioncriterianame;
	
	@JsonIgnore
	@Column(name="selectioncriteriadescription")
	String selectioncriteriadescription;
	
	@JsonIgnore
	@OneToMany(mappedBy = "selectioncriteriaid")
	private List<Product> product;
}
