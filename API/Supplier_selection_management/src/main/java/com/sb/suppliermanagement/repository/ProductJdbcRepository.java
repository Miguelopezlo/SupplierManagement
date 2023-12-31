package com.sb.suppliermanagement.repository;


import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.sb.suppliermanagement.dto.ProductDTO;
import com.sb.suppliermanagement.model.ContractInsert;
import com.sb.suppliermanagement.model.ProductInsert;

@Repository
public class ProductJdbcRepository{
	
    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    
    }

    public ProductInsert save(ProductInsert productInsert) {
    	try {
    	      String sql = "INSERT INTO product (productid, productname, averageprice, activityid, selectioncriteriaid) " +
    	                "VALUES (PRODUCT_SECUENCE.NEXTVAL, ?, ?, ?, ?)";
    	            jdbcTemplate.update(sql,
    	            		productInsert.getProductName(),
    	            		productInsert.getAveragePrice(),
    	            		productInsert.getActivityId(),
    	            		productInsert.getSelectionCriteriaId());
		} catch (Exception e) {
			System.out.println("Error al guardar el contrato: "+e.getMessage());
		}
		return productInsert;
    	
    }
}

