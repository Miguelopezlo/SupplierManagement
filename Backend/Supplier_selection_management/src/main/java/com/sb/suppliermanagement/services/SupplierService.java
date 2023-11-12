package com.sb.suppliermanagement.services;

import java.util.List;
import java.util.Optional;
import org.springframework.web.multipart.MultipartFile;
import com.sb.suppliermanagement.dto.SupplierDTO;
import com.sb.suppliermanagement.dto.SupplierProcessingDTO;
import com.sb.suppliermanagement.model.Supplier;

public interface SupplierService {
	
	//Se describe el funcionamiento de los sigueinte metodos en el archivo SupplierServiceImpl
	public List<Supplier> findAll();
	public Optional<Supplier> findById(Long id);
	public List<Supplier> findByCity(String city);
	public List<Supplier> findByScore(int score);
	public Supplier save(Supplier supplier);
	public void deleteById(Long id);
	public List<Supplier> getSupplierByProductid( Long productid);
	public  SupplierProcessingDTO createSuppliers(MultipartFile file);
	public List<SupplierDTO> findAllasDTO();
	
}
