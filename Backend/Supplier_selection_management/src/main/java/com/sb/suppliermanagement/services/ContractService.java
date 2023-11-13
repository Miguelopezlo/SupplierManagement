package com.sb.suppliermanagement.services;


import java.util.Optional;

import com.sb.suppliermanagement.dto.ContractDTO;
import com.sb.suppliermanagement.model.Contract;
import com.sb.suppliermanagement.model.Supplier;


public interface ContractService {
	
	//Se describe el funcionamiento de los sigueinte metodos en el archivo ContractServiceImpl
	public Optional<Contract> findById(Long id);
	public Optional<ContractDTO> findByContractid(Long id);
	public Contract save(Contract contract);
	public ContractDTO save(ContractDTO contract);
	

}
