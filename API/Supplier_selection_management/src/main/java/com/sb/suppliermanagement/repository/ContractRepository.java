package com.sb.suppliermanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sb.suppliermanagement.dto.ContractDTO;
import com.sb.suppliermanagement.model.Contract;

public interface ContractRepository extends JpaRepository<Contract, Long> {
	Optional<ContractDTO> findByContractid(Long id);
	ContractDTO save(ContractDTO contract);
	
	
	
	@Query(
			value=	"insert into contract (c.contractid, c.contractdescription, c.startdate, c.finishdate, c.contractstate, c.productid, c.supplierid)"
					+ "values ( ?, ?, ?, ?, ?, ?, ?)",
			nativeQuery=true)
	ContractDTO saveAll(Contract contract);
}
