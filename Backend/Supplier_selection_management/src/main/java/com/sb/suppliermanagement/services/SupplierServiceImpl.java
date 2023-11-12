package com.sb.suppliermanagement.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import com.sb.suppliermanagement.dto.SupplierDTO;
import com.sb.suppliermanagement.dto.SupplierProcessingDTO;
import com.sb.suppliermanagement.model.Supplier;
import com.sb.suppliermanagement.repository.SupplierRepository;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository repositorio;

    // Método que busca y devuelve una lista de todos los proveedores.
    @Transactional(readOnly=true)
    public List<Supplier> findAll() {
        return repositorio.findAll();
    }

    // Método que busca y devuelve un proveedor específico por su ID.
    @Transactional(readOnly=true)
    public Optional<Supplier> findById(Long id) {
        return repositorio.findById(id);
    }

    // Método que busca y devuelve una lista de proveedores por ciudad.
    @Transactional(readOnly=true)
    public List<Supplier> findByCity(String city) {
        return (List<Supplier>) repositorio.findByCity(city);
    }

    // Método que busca y devuelve una lista de proveedores por puntaje.
    @Transactional(readOnly=true)
    public List<Supplier> findByScore(int score) {
        return (List<Supplier>) repositorio.findByScore(score);
    }

    // Método que guarda un nuevo proveedor en la base de datos.
    @Transactional
    public Supplier save(Supplier supplier) {
        return repositorio.save(supplier);
    }

    // Método que elimina un proveedor por su ID.
    @Transactional
    public void deleteById(Long id) {
        repositorio.deleteById(id);
    }

    // Método que busca y devuelve una lista de proveedores por el ID del producto que suministran.
    @Transactional(readOnly=true)
    public List<Supplier> getSupplierByProductid(Long productid) {
        System.out.println("Se están buscando los proveedores para este producto" + productid);
        return repositorio.getSupplierByProductid(productid);
    }

    // Método que crea proveedores a partir de un archivo CSV recibido como MultipartFile.
    public SupplierProcessingDTO createSuppliers(MultipartFile file) {
        SupplierProcessingDTO processInfo = new SupplierProcessingDTO();
        int newSupplierCount = 0;
        ArrayList<Long> invalidSupplierid = new ArrayList<Long>();
        ArrayList<Long> validSupplierid = new ArrayList<Long>();
        ArrayList<Supplier> toSaveSupplier = new ArrayList<Supplier>();
        try {
            // Lee el contenido del archivo como texto desde el MultipartFile.
            BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
            String row;
            while ((row = reader.readLine()) != null && !row.isEmpty()) {
                // Divide la cadena de fila en diferentes valores utilizando una coma como delimitador.
                String[] supplierData = row.split(",");
                System.out.println("Fila " + Arrays.toString(supplierData));
                // Mapea manualmente los datos en una instancia de Supplier.
                Supplier newSupplier = new Supplier();
                newSupplier.setSupplierid(Long.parseLong(supplierData[0]));

                // Comprueba si el supplierId ya existe en la base de datos o si se repite en este archivo CSV.
                if (repositorio.existsBySupplierid(newSupplier.getSupplierid()) || validSupplierid.contains(newSupplier.getSupplierid()) == true) {
                    invalidSupplierid.add(newSupplier.getSupplierid());
                } else {
                    validSupplierid.add(newSupplier.getSupplierid());
                    newSupplier.setCompanyname(supplierData[1].strip());
                    newSupplier.setContact(supplierData[2].strip());
                    newSupplier.setAddress(supplierData[3].strip());
                    newSupplier.setCelphone(supplierData[4].strip());
                    newSupplier.setEmail(supplierData[5].strip());
                    newSupplier.setScore(Integer.parseInt(supplierData[6].strip())) ;
                    newSupplier.setCity(supplierData[7].strip());
                    toSaveSupplier.add(newSupplier);
                }
            }
            // Guarda la lista de proveedores en la base de datos y cuenta los nuevos proveedores creados.
            newSupplierCount = repositorio.saveAll(toSaveSupplier).size();
            processInfo.setCreatedSuppliers(newSupplierCount);
            processInfo.setInvalidSupplierid(invalidSupplierid);
            System.out.println("INTERNAL PROCESS: " + newSupplierCount + " nuevos proveedores se han guardado");
            System.out.println("INTERNAL PROCESS: " + invalidSupplierid.size() + " documentos inválidos encontrados");
            return processInfo;
        } catch (IOException ex) {
            ex.printStackTrace();
            return processInfo;
        }
    }

    // Método que busca y devuelve una lista de proveedores como objetos DTO.
    @Transactional(readOnly=true)
    public List<SupplierDTO> findAllasDTO() {
        List<Supplier> supplier = repositorio.findAll();
        List<SupplierDTO> supplierDTOs = new ArrayList<>();
        // Recorre el arreglo supplier y settea los datos al objeto DTO
        for (Supplier supplierite : supplier) {
            SupplierDTO dto = new SupplierDTO();
            dto.setCompanyname(supplierite.getCompanyname());
            dto.setContact(supplierite.getContact());
            dto.setAddress(supplierite.getAddress());
            dto.setCelphone(supplierite.getCelphone());
            dto.setEmail(supplierite.getEmail());
            dto.setScore(supplierite.getScore());
            dto.setCity(supplierite.getCity());
            
            //Agrega al arreglo supplierDTOs el objeto recien setteado
            supplierDTOs.add(dto);
        }

        return supplierDTOs;
    }
}
	
	


