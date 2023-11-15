package com.sb.suppliermanagement.services;


import java.util.Optional;
import com.sb.suppliermanagement.dto.ContractDTO;
import com.sb.suppliermanagement.model.Contract;
import com.sb.suppliermanagement.model.ContractInsert;



public interface ContractService {
	
	//Se describe el funcionamiento de los sigueinte metodos en el archivo ContractServiceImpl
	public Optional<Contract> findById(Long id);
	public Optional<ContractDTO> findByContractid(Long id);
	public Object save(Contract contractdb);

}
