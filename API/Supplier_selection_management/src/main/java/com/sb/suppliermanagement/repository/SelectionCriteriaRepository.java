package com.sb.suppliermanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sb.suppliermanagement.model.SelectionCriteria;

public interface SelectionCriteriaRepository extends JpaRepository<SelectionCriteria, Long> {

}
