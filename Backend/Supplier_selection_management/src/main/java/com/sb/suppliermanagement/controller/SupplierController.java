package com.sb.suppliermanagement.controller;
import java.util.List;
import java.util.Optional;

import com.sb.suppliermanagement.dto.SupplierProcessingDTO;
import com.sb.suppliermanagement.model.Supplier;
import com.sb.suppliermanagement.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/supplier")
@CrossOrigin(origins = "http://localhost:4200")
public class SupplierController {

    @Autowired
    private SupplierService service;

    // Obtiene todos los proveedores como objetos DTO
    @GetMapping("/all")
    public ResponseEntity<?> listSupplier() {
        return ResponseEntity.ok().body(service.findAllasDTO());
    }

    // Obtiene un proveedor por su ID
    @GetMapping("/id/{id}")
    public ResponseEntity<?> listSupplierById(@PathVariable Long id) {
        Optional<Supplier> o = service.findById(id);
        if (o.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(o.get());
    }

    // Obtiene proveedores por ciudad
    @GetMapping("/city/{city}")
    public ResponseEntity<?> listSupplierByCity(@PathVariable String city) {
        List<Supplier> o = service.findByCity(city);
        if (o.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(o);
    }

    // Obtiene proveedores por puntaje
    @GetMapping("/score/{score}")
    public ResponseEntity<?> listSupplierByScore(@PathVariable int score) {
        List<Supplier> o = service.findByScore(score);
        if (o.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(o);
    }

    // Obtiene proveedores por ID de producto
    @GetMapping("/Supplierbyproductid/{productid}")
    public ResponseEntity<?> listSupplierByProductid(@PathVariable Long productid) {
        List<Supplier> o = service.getSupplierByProductid(productid);
        if (o.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(o);
    }

    // Crea un nuevo proveedor
    @PostMapping("/create")
    public ResponseEntity<?> createSupplier(@RequestBody Supplier supplier) {
        Supplier supplierdb = service.save(supplier);
        return ResponseEntity.status(HttpStatus.CREATED).body(supplierdb);
    }

    // Actualiza el puntaje de un proveedor por su ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateScoreSupplier(@RequestBody Supplier supplier, @PathVariable Long id) {
        Optional<Supplier> o = service.findById(id);
        if (o.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Supplier supplierdb = o.get();
        supplierdb.setScore(supplier.getScore());
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(supplierdb));
    }

    // Elimina un proveedor por su ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSupplier(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Crea múltiples proveedores a partir de un archivo CSV
    @PostMapping("/create/many")
    public ResponseEntity<Object> createSuppliers(@RequestParam("suppliers") MultipartFile file) {
        System.out.println("HTTP REQUEST: create list of suppliers from MultiPart file " + file.getOriginalFilename());
        SupplierProcessingDTO processInfo = service.createSuppliers(file);
        System.out.println("HTTP RESPONSE: number of new suppliers that were saved in the database");
        return new ResponseEntity<>(processInfo, HttpStatus.OK);
    }
}
