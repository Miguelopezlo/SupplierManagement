package com.sb.suppliermanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sb.suppliermanagement.model.Supplier;


public interface SupplierRepository extends JpaRepository<Supplier, Long> {
	
	
	List<Supplier> findByCity(String city);
	List<Supplier> findByScore(int score);
	
	
	@Query(
			value="SELECT S.supplierid, S.companyname, S.contact, S.address, S.celphone, S.email, S.score, S.city "
					+ "FROM SUPPLIERPRODUCTV1 SP, SUPPLIER S "
					+ "WHERE :productid LIKE SP.PRODUCTID AND "
					+ "S.SUPPLIERID = SP.SUPPLIERID",
			nativeQuery=true)
	
	List<Supplier> getSupplierByProductid(@Param("productid") Long productid);
	
	boolean existsBySupplierid(Long supplierid);

}
