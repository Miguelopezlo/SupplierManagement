package com.sb.suppliermanagement.model;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContractInsert {
	
	private Long contractid;
	private String contractdescription;
	private String startdate;
	private String finishdate;
	private String contractstate;
	private Long supplierid;
	private Long productid;

}
