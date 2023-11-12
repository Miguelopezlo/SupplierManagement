package com.sb.suppliermanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sb.suppliermanagement.model.Users;

public interface UserRepository extends JpaRepository<Users, Long> {

}
