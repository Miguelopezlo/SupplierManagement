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
@Table(name="responsiblearea", schema="APP_M_PROV_SELECC")
public class ResponsibleArea {
	
	@Id
	@JsonIgnore
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "responsiblearea_secuence")
	@SequenceGenerator(name = "responsiblearea_secuence", sequenceName = "responsiblearea_secuence", allocationSize = 1)
	@Column(name="responsibleareaid")
	Long responsibleareaid;
	
	@Column(name="responsibleareaname")
	String responsibleareaname;
	
	@JsonIgnore
	@OneToMany(mappedBy = "responsibleareaid")
	private List<SelectionActivity> responsiblearea;
	

}
