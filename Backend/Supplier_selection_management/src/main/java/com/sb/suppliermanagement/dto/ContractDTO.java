package com.sb.suppliermanagement.dto;

import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ContractDTO {
	private Long contractId;
	private String contractDescription;
	private LocalDate startDate;
	private LocalDate finishDate;
	private String contractState;
	private String supplierName;
	private String productName;
}
