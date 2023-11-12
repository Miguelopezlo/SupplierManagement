package com.sb.suppliermanagement.controller;

import java.util.Optional;

import com.sb.suppliermanagement.dto.ContractDTO;
import com.sb.suppliermanagement.services.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/contract")
@CrossOrigin
public class ContractController {
	
	@Autowired
	private ContractService service;
	
	
	// Implementación del metodo get para el modelo entidad
	@GetMapping("/{id}")
	public ResponseEntity<?> getContractByIdDTO(@PathVariable Long id) {
	    // Llama al método findByContractid del servicio para buscar el contrato por su ID.
	    Optional<ContractDTO> o = service.findByContractid(id);

	    // Verifica si el contrato fue encontrado.
	    if (o.isEmpty()) {
	        // Si no se encuentra el contrato, devuelve una respuesta de "No encontrado" (HTTP 404).
	        return ResponseEntity.notFound().build();
	    }

	    // Si se encuentra el contrato, devuelve una respuesta exitosa (HTTP 200) con el cuerpo del objeto DTO.
	    return ResponseEntity.ok().body(o.get());
	}
}