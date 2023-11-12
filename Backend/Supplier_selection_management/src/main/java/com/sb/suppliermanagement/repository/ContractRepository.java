package com.sb.suppliermanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sb.suppliermanagement.dto.ContractDTO;
import com.sb.suppliermanagement.model.Contract;

public interface ContractRepository extends JpaRepository<Contract, Long> {
	 Optional<ContractDTO> findByContractid(Long id);
	
	


}
