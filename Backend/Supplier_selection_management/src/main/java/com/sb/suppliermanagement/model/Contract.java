package com.sb.suppliermanagement.model;


import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="contract", schema="APP_M_PROV_SELECC")
public class Contract implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2814708347276000292L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contracts_secuence")
	@SequenceGenerator(name = "contracts_secuence", sequenceName = "contracts_secuence", allocationSize = 1)
	@Column(name="contractid")
	Long contractid;
	
	@Column(name="contractdescription")
	String contractdescription;
	
	@Column(name="startdate")
	LocalDate startdate;
	
	@Column(name="finishdate")
	LocalDate finishdate;
	
	@Column(name="contractstate")
	String contractstate;
	
    @ManyToOne
    @JoinColumn(name = "productid")
	private Product productid;
    

    @ManyToOne
    @JoinColumn(name = "supplierid")
	private Supplier supplierid;

}
