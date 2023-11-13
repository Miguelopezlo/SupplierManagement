package com.sb.suppliermanagement.dto;


import lombok.Data;

@Data
public class ProductDTO {
	private Long productId;
	private String productName;
	private int averagePrice;
	private String activityName;
	private String selectionCriteria;

}
