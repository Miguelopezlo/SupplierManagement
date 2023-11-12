package com.sb.suppliermanagement.dto;


import java.util.ArrayList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// DTO to return info of created clients and invalid client documents
@Getter @Setter 
@AllArgsConstructor 
@NoArgsConstructor
public class SupplierProcessingDTO {

    private int createdSuppliers;
    private ArrayList<Long> invalidSupplierid;
    
}