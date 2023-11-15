package com.sb.suppliermanagement.repository;


import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.sb.suppliermanagement.model.ContractInsert;

@Repository
public class ContractJdbcRepository{
	
    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    
    }

    public ContractInsert save(ContractInsert contractInsert) {
    	try {
    	      String sql = "INSERT INTO contract (contractid, contractdescription, startdate, finishdate, contractstate, productid, supplierid) " +
    	                "VALUES (CONTRACTS_SECUENCE.NEXTVAL, ?, ?, ?, ?, ?, ?)";
    	            jdbcTemplate.update(sql,
    	                    contractInsert.getContractdescription(),
    	                    contractInsert.getStartdate(),
    	                    contractInsert.getFinishdate(),
    	                    contractInsert.getContractstate(),
    	                    contractInsert.getProductid(),
    	                    contractInsert.getSupplierid());
		} catch (Exception e) {
			System.out.println("Error al guardar el contrato: "+e.getMessage());
		}
		return contractInsert;
    	
    }
}

