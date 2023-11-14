package com.sb.suppliermanagement.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.sb.suppliermanagement.model.ContractInsert;

@Repository
public class ContractJdbcRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveContract(ContractInsert contract) {
        String sql = "INSERT INTO contract (contractid, contractdescription, startdate, finishdate, contractstate, productid, supplierid) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql,
                    contract.getContractid(),
                    contract.getContractdescription(),
                    contract.getStartdate(),
                    contract.getFinishdate(),
                    contract.getContractstate(),
                    contract.getProductid(),
                    contract.getSupplierid());

    }
}
