package com.sb.suppliermanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sb.suppliermanagement.dto.ProductDTO;
import com.sb.suppliermanagement.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findByselectioncriteriaid(Long criteria);
	List<Product> findByProductname(String Name);
	ProductDTO save(ProductDTO product);

}