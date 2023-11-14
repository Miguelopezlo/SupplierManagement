package com.sb.suppliermanagement.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ContractDTO {
	private Long contractid;
	private String contractdescription;
	private String startdate;
	private String finishdate;
	private String contractstate;
	private String suppliername;
	private String productname;
	private Long supplierid;
	private Long productid;
}
