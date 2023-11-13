package com.sb.suppliermanagement.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.sb.suppliermanagement.dto.ProductDTO;
import com.sb.suppliermanagement.model.Product;
import com.sb.suppliermanagement.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repositorio;

    // Método que busca y devuelve una lista de todos los productos.
    @Transactional(readOnly=true)
    public List<Product> findAll() {
        return repositorio.findAll();
    }

    // Método que busca y devuelve una lista de productos por criterio de selección.
    @Transactional(readOnly=true)
    public List<Product> findByselectioncriteriaid(Long criteria) {
        return (List<Product>) repositorio.findByselectioncriteriaid(criteria);
    }

    // Método que busca y devuelve una lista de productos por nombre.
    @Transactional(readOnly=true)
    public List<Product> findByProductname(String name) {
        return (List<Product>) repositorio.findByProductname(name);
    }

    // Método que guarda un nuevo producto en la base de datos.
    @Transactional
    public Product save(Product product) {
        return repositorio.save(product);
    }

    // Método que busca y devuelve una lista de productos como objetos DTO.
    public List<ProductDTO> findAllasDTO() {
        List<Product> product = repositorio.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();
     // Recorre el arreglo product y settea los datos al objeto DTO
        for (Product productite : product) {
            ProductDTO dto = new ProductDTO();
            dto.setProductId(productite.getProductid());
            dto.setProductName(productite.getProductname());
            dto.setAveragePrice(productite.getAverageprice());

            // Obtener los nombres de las relaciones
            if (productite.getActivityid() != null) {
                dto.setActivityName(productite.getActivityid().getActivityname());
            }
            if (productite.getSelectioncriteriaid() != null) {
                dto.setSelectionCriteria(productite.getSelectioncriteriaid().getSelectioncriterianame());
            }

            productDTOs.add(dto);
        }

        return productDTOs;
    }

    // Método que busca y devuelve una lista de productos por criterio de selección como objetos DTO.
    public List<ProductDTO> findBySelectioncriteriaidAsDTO(Long criteria) {
        List<Product> product = repositorio.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();

        for (Product productite : product) {
            ProductDTO dto = new ProductDTO();
            dto.setProductId(productite.getProductid());
            dto.setProductName(productite.getProductname());
            dto.setAveragePrice(productite.getAverageprice());

            // Obtener los nombres de las relaciones
            if (productite.getActivityid() != null) {
                dto.setActivityName(productite.getActivityid().getActivityname());
            }
            if (productite.getSelectioncriteriaid() != null && productite.getSelectioncriteriaid().getSelectioncriteriaid() == criteria) {
                dto.setSelectionCriteria(productite.getSelectioncriteriaid().getSelectioncriterianame());
                productDTOs.add(dto);
            }
        }

        return productDTOs;
    }

    // Método que busca y devuelve una lista de productos por ID de producto como objetos DTO.
    public List<ProductDTO> findByProductidAsDTO(Long productid) {
        List<Product> product = repositorio.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();
        
     // Recorre el arreglo product y settea los datos al objeto DTO
        for (Product productite : product) {
            ProductDTO dto = new ProductDTO();
            dto.setProductId(productite.getProductid());
            dto.setProductName(productite.getProductname());
            dto.setAveragePrice(productite.getAverageprice());

            // Obtener los nombres de las relaciones
            if (productite.getSelectioncriteriaid() != null) {
                dto.setSelectionCriteria(productite.getSelectioncriteriaid().getSelectioncriterianame());
            }
            if (productite.getActivityid() != null && productite.getActivityid().getActivityname() != null) {
                dto.setActivityName(productite.getActivityid().getActivityname());
            }

            if (dto.getProductId() == productid) {
                productDTOs.add(dto);
            }
        }

        return productDTOs;
    }
}
