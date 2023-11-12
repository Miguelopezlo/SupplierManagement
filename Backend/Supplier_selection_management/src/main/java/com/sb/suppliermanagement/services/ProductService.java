package com.sb.suppliermanagement.services;

import java.util.List;

import com.sb.suppliermanagement.dto.ProductDTO;
import com.sb.suppliermanagement.model.Product;


public interface ProductService {
	
	//Se describe el funcionamiento de los sigueinte metodos en el archivo ProductServiceImpl
	public List<Product> findAll();
	public List<Product> findByselectioncriteriaid(Long criteria);
	public List<Product> findByProductname(String name);
	public Product save(Product product);
	public List<ProductDTO> findAllasDTO();
	public List<ProductDTO> findBySelectioncriteriaidAsDTO(Long criteria);
	public List<ProductDTO> findByProductidAsDTO(Long id);


}
