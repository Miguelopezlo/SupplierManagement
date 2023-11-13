package com.sb.suppliermanagement.model;



import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
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
@Embeddable
@Table(name="supplierproductv1", schema="APP_M_PROV_SELECC")
public class SupplierProductv1 implements Serializable{

	private static final long serialVersionUID = -4349949192937833590L;

//	@EmbeddedId
//	private SupplierProductId product;
//
//	@ManyToOne
//	@JsonIgnore
//	@JoinColumn(name = "supplierid", insertable =false, updatable = false)
//	@MapsId("supplierid")
//	private Supplier supplier;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "supprod_secuence")
	@SequenceGenerator(name = "supprod_secuence", sequenceName = "supprod_secuence", allocationSize = 1)
	@Column(name="id")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "supplierid")
	private Supplier supplierid;
	
	@ManyToOne
	@JoinColumn(name = "productid")
	private Product productid;
	
	
}

