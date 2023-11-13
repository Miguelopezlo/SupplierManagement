package com.sb.suppliermanagement.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name="selectionactivity", schema="APP_M_PROV_SELECC")
public class SelectionActivity {
	
	@Id
	@JsonIgnore
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "selectionactivity_secuence")
	@SequenceGenerator(name = "selectionactivity_secuence", sequenceName = "selectionactivity_secuence", allocationSize = 1)
	@Column(name="activityid")
	Long activityid;
	
	@Column(name="activityname")
	String activityname;
	
	@JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "responsibleareaid")
	private ResponsibleArea responsibleareaid;
    
    @JsonIgnore
	@OneToMany(mappedBy = "activityid", cascade=CascadeType.PERSIST)
	private List<Product> product;
	
}
