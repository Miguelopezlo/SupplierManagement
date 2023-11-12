package com.sb.suppliermanagement.dto;

import java.io.Serializable;
import lombok.Data;
import com.sb.suppliermanagement.model.SupplierProductv1;



@Data
public class SupplierProductv1DTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private SupplierProductv1 supplierid;
	private SupplierProductv1 productid;
	
}
